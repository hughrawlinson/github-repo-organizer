import { ColumnType, ColumnFragment } from ".";

export default {
  getColumnName: () => "repositoryTopics",
  getColumnType: (): ColumnType => ({
    dataType: "string",
    dataSource: "GitHubGraphQL",
  }),
  getColumnFragment: (): ColumnFragment => ({
    name: "repositoryTopics",
    fragment:
      "fragment repositoryTopics on Repository { repositoryTopics(first:100) { nodes { topic { id name } } } }",
  }),
};
