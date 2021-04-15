import { ColumnType, ColumnFragment } from ".";

export default {
  getColumnName: () => "createdAt",
  getColumnType: (): ColumnType => ({
    dataType: "string",
    dataSource: "GitHubGraphQL",
  }),
  getColumnFragment: (): ColumnFragment => ({
    name: "createdAt",
    fragment: " fragment createdAt on Repository { createdAt } ",
  }),
};
