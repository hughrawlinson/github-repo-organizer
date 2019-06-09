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
          ...description
          ...createdAt
          ...repositoryTopics
          ...stargazers
          ...primaryLanguage
          ...private
          ...archived
          ...issues
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

fragment description on Repository {
  description
}

fragment createdAt on Repository {
  createdAt
}

fragment repositoryTopics on Repository {
  repositoryTopics(first:100) {
    nodes {
      topic {
        id
        name
      }
    }
  }
}

fragment stargazers on Repository {
  stargazers {
    totalCount
  }
}

fragment primaryLanguage on Repository {
  primaryLanguage {
    name
  }
}

fragment private on Repository {
  isPrivate
}

fragment archived on Repository {
  isArchived
}

fragment issues on Repository {
  issues (states: OPEN) {
    totalCount
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
