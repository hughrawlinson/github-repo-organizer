const query = (endCursor) => `query {
    viewer {
      repositories (first:100${endCursor ? ", after:\"" + endCursor + '"': ''}) {
        pageInfo {
          endCursor
        }
        totalCount,
        nodes {
          id,
          name,
          description,
          createdAt,
          repositoryTopics(first:100) {
            nodes {
              topic {
                id
                name
              }
            }
          }
          stargazers {totalCount},
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
              packageName
              vulnerableManifestFilename
              vulnerableRequirements
              securityAdvisory {
                description
                summary
              }
            }
          }
          collaborators (first: 50){
            nodes {
              name
              login
            }
          }
        }
      }
    }
  }`

export default query;
