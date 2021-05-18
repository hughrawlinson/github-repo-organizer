import { gql } from "@apollo/client";
import REPOSITORY_ROW_FIELDS from "./RepositoryRowFields";

export default gql`
  ${REPOSITORY_ROW_FIELDS}
  query GitHubRespositorySearchRow($endCursor: String, $search: String!) {
    search(type: REPOSITORY, query: $search, first: 40, after: $endCursor) {
      pageInfo {
        endCursor
      }
      repositoryCount
      nodes {
        ...RepositoryRowFields
      }
    }
  }
`;
