import { useEffect, useState } from "react";
import { useLogin } from "../UserLogin";
import { graphql } from "@octokit/graphql";
import query from "./gitHubGraphQlQuery";
import { Convert, Data } from "./gitHubGraphQlQueryResponseType";
import { Repository } from "../RepositoryTable";

async function load(
  accessToken: string,
  login: string,
  endCursor?: string
): Promise<[Repository[], number]> {
  let data: Data;
  try {
    const result = await graphql<Data>({
      query: query(endCursor ?? ""),
      headers: {
        authorization: `token ${accessToken}`,
        accept: "application/vnd.github.vixen-preview+json",
      },
    });
    data = Convert.toGitHubRepoQueryResponseType(`{ data: ${result} }`).data;
  } catch (error) {
    console.log(error);
    data = error.data;
  }

  const repos: Repository[] = data.viewer.repositories.nodes.map((repo) => ({
    id: repo.id,
    name: repo.name,
    nameWithOwner: repo.nameWithOwner,
    description: repo.description,
    createdAt: repo.createdAt,
    topics: repo.repositoryTopics.nodes.map((node) => node.topic.name),
    stars: repo.stargazers.totalCount,
    language: ((l) => l && l.name)(repo.primaryLanguage),
    isPrivate: repo.isPrivate,
    isArchived: repo.isArchived,
    url: repo.url,
    owner: repo.owner.login,
    isFork: repo.isFork,
    licenseNickname:
      repo.licenseInfo && (repo.licenseInfo.nickname || repo.licenseInfo.name),
    vulnerabilityAlerts: repo.vulnerabilityAlerts.nodes,
    collaborators:
      repo.collaborators &&
      repo.collaborators.nodes
        .filter((a) => a.login !== login)
        .map((collaborator) => collaborator.login),
    issueCount: repo.issues.totalCount,
    pullRequestCount: repo.pullRequests.totalCount,
  }));

  return [repos, data.viewer.repositories.totalCount];
}

export function useRepositories(): [Repository[], () => any] {
  const login: any = useLogin();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (login.hasOwnProperty("accessToken")) {
        const [repos, totalCount] = await load(
          login.accessToken,
          login.user.login
        );

        // if (repos.length < totalCount) {
        //   yield startLoadRepos(
        //     data.viewer.repositories.pageInfo.endCursor,
        //     action
        //   );
        // }
        if (!cancelled) {
          setRepositories(repos);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return [repositories, () => setRepositories([])];
}
