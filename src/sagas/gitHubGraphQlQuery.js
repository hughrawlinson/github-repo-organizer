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
          ...owner
          ...nameWithOwner
          ...url
          ...fork
          ...licenses
          ...vulnerabilityAlerts
          ...collaborators
        }
      }
    }
  }

fragment pullRequestCount on Repository {
  pullRequests (states: OPEN) {
    totalCount
  }
}

fragment owner on Repository {
  owner {
    login
  }
}

fragment nameWithOwner on Repository {
  nameWithOwner
}

fragment url on Repository {
  url
}

fragment fork on Repository {
  isFork
}

fragment licenses on Repository {
  licenseInfo {
    name
    nickname
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

fragment collaborators on Repository {
  collaborators (first: 50){
    nodes {
      name
      login
    }
  }
}
`

export default query;
