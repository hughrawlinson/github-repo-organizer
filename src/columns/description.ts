import { ColumnType, ColumnFragment } from ".";

export default {
  getColumnName: () => "description",
  getColumnType: (): ColumnType => ({
    dataType: "string",
    dataSource: "GitHubGraphQL",
  }),
  getColumnFragment: (): ColumnFragment => ({
    name: "description",
    fragment: "fragment description on Repository { description } ",
  }),
};
