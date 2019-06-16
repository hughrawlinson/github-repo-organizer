export default {
  getColumnName: () => "name",
  getColumnType: () => ({
    dataType: "string",
    dataSource: "GitHubGraphQL"
  }),
  getColumnFragment: () => ({
    name: 'name',
    fragment: 'fragment name on Repository { name } '
  })
};
