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
          ...pullRequestCount
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
          ...vulnerabilityAlerts
        }
      }
    }
  }

fragment pullRequestCount on Repository {
  pullRequests (states: OPEN) {
    totalCount
  }
}

fragment vulnerabilityAlerts on Repository {
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
}
`

export default query;
