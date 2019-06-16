export default {
  getColumnName: () => "createdAt",
  getColumnType: () => ({
    dataType: "string",
    dataSource: "GitHubGraphQL"
  }),
  getColumnFragment: () => ({
    name: 'createdAt',
    fragment: ' fragment createdAt on Repository { createdAt } '
  })
};
