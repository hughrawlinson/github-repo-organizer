import { ApolloClient, InMemoryCache } from "@apollo/client";
import query from "./gitHubRepositoryRow";
import { Repository } from "./Repository";

export default async function load(
  accessToken: string,
  login: string,
  endCursor?: string
) {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const result = await client.query({
    query,
    variables: {
      endCursor,
    },
  });

  const { data } = result;

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
        codeOfConduct: repo.codeOfConduct?.name || "None",
      }
  );

  return [
    repos,
    data.viewer.repositories.totalCount,
    data.viewer.repositories.pageInfo.endCursor,
  ];
}
