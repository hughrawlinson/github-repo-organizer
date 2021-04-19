const query = (endCursor: string) => `query {
  viewer {
    repositories (first:40${
      endCursor ? ', after:"' + endCursor + '"' : ""
    }, ownerAffiliations: [OWNER]) {
      pageInfo {
        endCursor
      }
      totalCount
      nodes {
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
        issues (states: OPEN) {
          totalCount
        }
        pullRequests (states: OPEN) {
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
        collaborators (first: 50){
          nodes {
            name
            login
          }
        }
        repositoryTopics(first:100) {
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
      }
    }
  }
}
`;

export default query;
