import { gql } from "@apollo/client";

export default gql`
  fragment RepositoryRowFields on Repository {
    id
    name
    description
    createdAt
    stargazerCount
    primaryLanguage {
      name
    }
    isPrivate
    isArchived
    issues(states: OPEN) {
      totalCount
    }
    pullRequests(states: OPEN) {
      totalCount
    }
    owner {
      login
    }
    nameWithOwner
    url
    isFork
    licenseInfo {
      name
      nickname
    }
    collaborators(first: 50) {
      nodes {
        name
        login
      }
    }
    repositoryTopics(first: 100) {
      nodes {
        topic {
          id
          name
        }
      }
    }
    codeOfConduct {
      name
    }
    defaultBranchRef {
      name
    }
    watchers {
      totalCount
    }
    diskUsage
    releases {
      totalCount
    }
    homepageUrl
  }
`;
