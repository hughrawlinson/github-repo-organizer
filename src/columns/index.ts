import description from "./description";
import name from "./name";
import createdAt from "./createdAt";
import repositoryTopics from "./repositoryTopics";

export type ColumnType = {
  dataType: string;
  dataSource: "GitHubGraphQL";
};

export type ColumnFragment = {
  name: string;
  fragment: string;
};

type Column = {
  getColumnName: () => string;
  getColumnType: () => ColumnType;
  getColumnFragment: () => ColumnFragment;
};

const exports: { [key: string]: Column } = {
  description,
  name,
  createdAt,
  repositoryTopics,
};

export default exports;
