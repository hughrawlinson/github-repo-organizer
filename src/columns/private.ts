import { ColumnType, ColumnFragment } from ".";

export default {
  getColumnName: () => "private",
  getColumnType: (): ColumnType => ({
    dataType: "boolean",
    dataSource: "GitHubGraphQL",
  }),
  getColumnFragment: (): ColumnFragment => ({
    name: "private",
    fragment: "fragment private on Repository { private } ",
  }),
};
