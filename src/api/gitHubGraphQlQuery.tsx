const query = (endCursor: string) => `query {
    viewer {
      repositories (first:40${endCursor ? ', after:"' + endCursor + '"' : ""}) {
        pageInfo {
          endCursor
        }
        totalCount
        nodes {
          id
          name
          description
          createdAt
          stargazers {
            totalCount
          }
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
          vulnerabilityAlerts (first:50){
            nodes {
              securityVulnerability {
                package {
                  name
                }
                advisory {
                  description
                  summary
                }
              }
            }
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
      }
    }
  }
}
`;

export default query;
