export default {
  getColumnName: () => "description",
  getColumnType: () => ({
    dataType: "string",
    dataSource: "GitHubGraphQL"
  }),
  getColumnFragment: () => ({
    name: 'description',
    fragment: 'fragment description on Repository { description } '
  })
};
