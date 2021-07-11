import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import VIEWER_REPOSITORY_ROWS from "./ViewerRepositoryRows";
import SEARCH_REPOSITORY_ROWS from "./SearchRepositoryRows";
import { Repository } from "./Repository";
import { GitHubRespositoryRow } from "./__generated__/GitHubRespositoryRow";
import { GitHubRespositorySearchRow } from "./__generated__/GitHubRespositorySearchRow";

async function getViewersRepositories(
  client: ApolloClient<NormalizedCacheObject>,
  endCursor: string
) {
  return await client.query<GitHubRespositoryRow>({
    query: VIEWER_REPOSITORY_ROWS,
    variables: {
      endCursor,
    },
  });
}

async function getSearchedRepositories(
  search: string,
  client: ApolloClient<NormalizedCacheObject>,
  endCursor: string
) {
  return await client.query<GitHubRespositorySearchRow>({
    query: SEARCH_REPOSITORY_ROWS,
    variables: {
      search,
      endCursor,
    },
  });
}

type Params = {
  accessToken: string;
  login: string;
  search?: string;
};
export default async function load(
  { accessToken, login, search }: Params,
  endCursor?: string
): Promise<[Repository[], number, string]> {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  let result;
  if (search) {
    result = await getSearchedRepositories(search, client, endCursor);
  } else {
    result = await getViewersRepositories(client, endCursor);
  }

  const { data } = result;

  const repos: Repository[] = data.viewer.repositories.nodes.map(
    (repo): Repository =>
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
        codeOfConduct: repo.codeOfConduct?.name || "None",
        defaultBranchName: repo.defaultBranchRef.name,
        watcherCount: repo.watchers.totalCount,
        diskUsage: repo.diskUsage,
        releaseCount: repo.releases.totalCount,
        homepage: repo.homepageUrl,
      }
  );

  return [
    repos,
    data.viewer.repositories.totalCount || data.search.repositoryCount,
    data.viewer.repositories.pageInfo.endCursor,
  ];
}
