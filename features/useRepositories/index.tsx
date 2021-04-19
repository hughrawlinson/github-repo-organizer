import { useEffect, useState } from "react";
import { useLogin } from "../UserLogin";
import { graphql } from "@octokit/graphql";
import query from "./gitHubGraphQlQuery";
import { Convert, Data } from "./gitHubGraphQlQueryResponseType";
import { Repository } from "./Repository";

async function load(
  accessToken: string,
  login: string,
  endCursor?: string
): Promise<[Repository[], number, string]> {
  let data: Data;
  try {
    const result = await graphql<Data>({
      query: query(endCursor ?? ""),
      headers: {
        authorization: `token ${accessToken}`,
        accept: "application/vnd.github.vixen-preview+json",
      },
    });
    // data = Convert.toGitHubRepoQueryResponseType(`{ data: ${result} }`).data;
    data = result;
  } catch (error) {
    console.log(error);
    data = error.data;
  }

  const repos: Repository[] = data.viewer.repositories.nodes.map(
    (repo) =>
      repo && {
        id: repo.id,
        name: repo.name,
        nameWithOwner: repo.nameWithOwner,
        description: repo.description,
        createdAt: repo.createdAt,
        topics: repo.repositoryTopics.nodes.map((node) => node.topic.name),
        stars: repo.stargazerCount,
        language: ((l) => l && l.name)(repo.primaryLanguage),
        isPrivate: repo.isPrivate,
        isArchived: repo.isArchived,
        url: repo.url,
        owner: repo.owner.login,
        isFork: repo.isFork,
        licenseNickname:
          repo.licenseInfo &&
          (repo.licenseInfo.nickname || repo.licenseInfo.name),
        vulnerabilityAlerts: [],
        collaborators:
          repo.collaborators &&
          repo.collaborators.nodes
            .filter((a) => a.login !== login)
            .map((collaborator) => collaborator.login),
        issueCount: repo.issues.totalCount,
        pullRequestCount: repo.pullRequests.totalCount,
      }
  );

  return [
    repos,
    data.viewer.repositories.totalCount,
    data.viewer.repositories.pageInfo.endCursor,
  ];
}

async function recurseLoad(
  accessToken: string,
  login: string,
  repos: Repository[],
  setRepositories: (r: Repository[]) => any,
  endCursor?: string
) {
  const [loadedRepos, totalCount, newEndCursor] = await load(
    accessToken,
    login,
    endCursor
  );

  const newRepos = [...repos, ...loadedRepos];

  if (newRepos.length < totalCount) {
    recurseLoad(accessToken, login, newRepos, setRepositories, newEndCursor);
  }

  setRepositories(newRepos);
}

export function useRepositories(): [Repository[], () => any] {
  const login: any = useLogin();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    (async () => {
      if (login.hasOwnProperty("accessToken")) {
        recurseLoad(
          login.accessToken,
          login.user.login,
          repositories,
          setRepositories
        );
      }
    })();
  }, []);
  return [repositories, () => setRepositories([])];
}
