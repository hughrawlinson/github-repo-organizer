import { ApolloClient, InMemoryCache } from "@apollo/client";
import VIEWER_REPOSITORY_ROWS from "./ViewerRepositoryRows";
import { Repository } from "./Repository";
import { GitHubRespositoryRow } from "./__generated__/GitHubRespositoryRow";

export default async function load(
  accessToken: string,
  login: string,
  endCursor?: string
): Promise<[Repository[], number, string | undefined]> {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const result = await client.query<GitHubRespositoryRow>({
    query: VIEWER_REPOSITORY_ROWS,
    variables: {
      endCursor,
    },
  });

  const { data } = result;

  if (!data?.viewer?.repositories?.nodes) {
    throw new Error("No repositories found");
  }

  const repos: Repository[] = data.viewer.repositories.nodes.flatMap((repo) =>
    repo
      ? [
          {
            id: repo.id,
            name: repo.name,
            nameWithOwner: repo.nameWithOwner,
            description: repo.description,
            createdAt: repo.createdAt,
            topics:
              repo.repositoryTopics.nodes?.flatMap((node) =>
                node ? [node.topic.name] : []
              ) || [],
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
              repo.collaborators?.nodes?.flatMap((collaborator) =>
                collaborator?.login ? [collaborator.login] : []
              ) || [],
            issueCount: repo.issues.totalCount,
            pullRequestCount: repo.pullRequests.totalCount,
            codeOfConduct: repo.codeOfConduct?.name || "None",
            defaultBranchName: repo.defaultBranchRef?.name || "",
            watcherCount: repo.watchers.totalCount,
            diskUsage: repo.diskUsage || Infinity,
            releaseCount: repo.releases.totalCount,
            homepage: repo.homepageUrl,
          },
        ]
      : []
  );
  const newEndCursor = data.viewer.repositories.pageInfo.endCursor;

  return [
    repos,
    data.viewer.repositories.totalCount,
    newEndCursor || undefined,
  ];
}
