import { gql } from "@apollo/client";
import REPOSITORY_ROW_FIELDS from "./RepositoryRowFields";

export default gql`
  ${REPOSITORY_ROW_FIELDS}
  query GitHubRespositoryRow($endCursor: String) {
    viewer {
      repositories(first: 40, after: $endCursor, ownerAffiliations: [OWNER]) {
        pageInfo {
          endCursor
        }
        totalCount
        nodes {
          ...RepositoryRowFields
        }
      }
    }
  }
`;
