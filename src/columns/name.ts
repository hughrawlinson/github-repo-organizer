import { ColumnType, ColumnFragment } from ".";

export default {
  getColumnName: () => "name",
  getColumnType: (): ColumnType => ({
    dataType: "string",
    dataSource: "GitHubGraphQL",
  }),
  getColumnFragment: (): ColumnFragment => ({
    name: "name",
    fragment: "fragment name on Repository { name } ",
  }),
};
