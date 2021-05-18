/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GitHubRespositorySearchRow
// ====================================================

export interface GitHubRespositorySearchRow_search_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface GitHubRespositorySearchRow_search_nodes_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_issues {
  __typename: "IssueConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_pullRequests {
  __typename: "PullRequestConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_licenseInfo {
  __typename: "License";
  /**
   * The license full name specified by <https: // spdx.org/licenses>
   */
  name: string;
  /**
   * Customary short name if applicable (e.g, GPLv3)
   */
  nickname: string | null;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_collaborators_nodes {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The username used to login.
   */
  login: string;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_collaborators {
  __typename: "RepositoryCollaboratorConnection";
  /**
   * A list of nodes.
   */
  nodes: (GitHubRespositorySearchRow_search_nodes_Repository_collaborators_nodes | null)[] | null;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_repositoryTopics_nodes_topic {
  __typename: "Topic";
  id: string;
  /**
   * The topic's name.
   */
  name: string;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_repositoryTopics_nodes {
  __typename: "RepositoryTopic";
  /**
   * The topic.
   */
  topic: GitHubRespositorySearchRow_search_nodes_Repository_repositoryTopics_nodes_topic;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_repositoryTopics {
  __typename: "RepositoryTopicConnection";
  /**
   * A list of nodes.
   */
  nodes: (GitHubRespositorySearchRow_search_nodes_Repository_repositoryTopics_nodes | null)[] | null;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_codeOfConduct {
  __typename: "CodeOfConduct";
  /**
   * The formal name of the Code of Conduct
   */
  name: string;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_defaultBranchRef {
  __typename: "Ref";
  /**
   * The ref name.
   */
  name: string;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_watchers {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository_releases {
  __typename: "ReleaseConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GitHubRespositorySearchRow_search_nodes_Repository {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Returns a count of how many stargazers there are on this object
   */
  stargazerCount: number;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: GitHubRespositorySearchRow_search_nodes_Repository_primaryLanguage | null;
  /**
   * Identifies if the repository is private or internal.
   */
  isPrivate: boolean;
  /**
   * Indicates if the repository is unmaintained.
   */
  isArchived: boolean;
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: GitHubRespositorySearchRow_search_nodes_Repository_issues;
  /**
   * A list of pull requests that have been opened in the repository.
   */
  pullRequests: GitHubRespositorySearchRow_search_nodes_Repository_pullRequests;
  /**
   * The User owner of the repository.
   */
  owner: GitHubRespositorySearchRow_search_nodes_Repository_owner;
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * Identifies if the repository is a fork.
   */
  isFork: boolean;
  /**
   * The license associated with the repository
   */
  licenseInfo: GitHubRespositorySearchRow_search_nodes_Repository_licenseInfo | null;
  /**
   * A list of collaborators associated with the repository.
   */
  collaborators: GitHubRespositorySearchRow_search_nodes_Repository_collaborators | null;
  /**
   * A list of applied repository-topic associations for this repository.
   */
  repositoryTopics: GitHubRespositorySearchRow_search_nodes_Repository_repositoryTopics;
  /**
   * Returns the code of conduct for this repository
   */
  codeOfConduct: GitHubRespositorySearchRow_search_nodes_Repository_codeOfConduct | null;
  /**
   * The Ref associated with the repository's default branch.
   */
  defaultBranchRef: GitHubRespositorySearchRow_search_nodes_Repository_defaultBranchRef | null;
  /**
   * A list of users watching the repository.
   */
  watchers: GitHubRespositorySearchRow_search_nodes_Repository_watchers;
  /**
   * The number of kilobytes this repository occupies on disk.
   */
  diskUsage: number | null;
  /**
   * List of releases which are dependent on this repository.
   */
  releases: GitHubRespositorySearchRow_search_nodes_Repository_releases;
  /**
   * The repository's URL.
   */
  homepageUrl: any | null;
}

export type GitHubRespositorySearchRow_search_nodes = GitHubRespositorySearchRow_search_nodes_App | GitHubRespositorySearchRow_search_nodes_Repository;

export interface GitHubRespositorySearchRow_search {
  __typename: "SearchResultItemConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: GitHubRespositorySearchRow_search_pageInfo;
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * A list of nodes.
   */
  nodes: (GitHubRespositorySearchRow_search_nodes | null)[] | null;
}

export interface GitHubRespositorySearchRow {
  /**
   * Perform a search across resources.
   */
  search: GitHubRespositorySearchRow_search;
}

export interface GitHubRespositorySearchRowVariables {
  endCursor?: string | null;
  search: string;
}
