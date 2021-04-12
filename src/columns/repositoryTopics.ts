export default {
  getColumnName: () => "repositoryTopics",
  getColumnType: () => ({
    dataType: "string",
    dataSource: "GitHubGraphQL"
  }),
  getColumnFragment: () => ({
    name: 'repositoryTopics',
    fragment: 'fragment repositoryTopics on Repository { repositoryTopics(first:100) { nodes { topic { id name } } } }'
  })
};
