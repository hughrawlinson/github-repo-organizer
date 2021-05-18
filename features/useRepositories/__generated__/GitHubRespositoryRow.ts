/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GitHubRespositoryRow
// ====================================================

export interface GitHubRespositoryRow_viewer_repositories_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_issues {
  __typename: "IssueConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_pullRequests {
  __typename: "PullRequestConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_licenseInfo {
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

export interface GitHubRespositoryRow_viewer_repositories_nodes_collaborators_nodes {
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

export interface GitHubRespositoryRow_viewer_repositories_nodes_collaborators {
  __typename: "RepositoryCollaboratorConnection";
  /**
   * A list of nodes.
   */
  nodes: (GitHubRespositoryRow_viewer_repositories_nodes_collaborators_nodes | null)[] | null;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_repositoryTopics_nodes_topic {
  __typename: "Topic";
  id: string;
  /**
   * The topic's name.
   */
  name: string;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_repositoryTopics_nodes {
  __typename: "RepositoryTopic";
  /**
   * The topic.
   */
  topic: GitHubRespositoryRow_viewer_repositories_nodes_repositoryTopics_nodes_topic;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_repositoryTopics {
  __typename: "RepositoryTopicConnection";
  /**
   * A list of nodes.
   */
  nodes: (GitHubRespositoryRow_viewer_repositories_nodes_repositoryTopics_nodes | null)[] | null;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_codeOfConduct {
  __typename: "CodeOfConduct";
  /**
   * The formal name of the Code of Conduct
   */
  name: string;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_defaultBranchRef {
  __typename: "Ref";
  /**
   * The ref name.
   */
  name: string;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_watchers {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes_releases {
  __typename: "ReleaseConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GitHubRespositoryRow_viewer_repositories_nodes {
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
  primaryLanguage: GitHubRespositoryRow_viewer_repositories_nodes_primaryLanguage | null;
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
  issues: GitHubRespositoryRow_viewer_repositories_nodes_issues;
  /**
   * A list of pull requests that have been opened in the repository.
   */
  pullRequests: GitHubRespositoryRow_viewer_repositories_nodes_pullRequests;
  /**
   * The User owner of the repository.
   */
  owner: GitHubRespositoryRow_viewer_repositories_nodes_owner;
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
  licenseInfo: GitHubRespositoryRow_viewer_repositories_nodes_licenseInfo | null;
  /**
   * A list of collaborators associated with the repository.
   */
  collaborators: GitHubRespositoryRow_viewer_repositories_nodes_collaborators | null;
  /**
   * A list of applied repository-topic associations for this repository.
   */
  repositoryTopics: GitHubRespositoryRow_viewer_repositories_nodes_repositoryTopics;
  /**
   * Returns the code of conduct for this repository
   */
  codeOfConduct: GitHubRespositoryRow_viewer_repositories_nodes_codeOfConduct | null;
  /**
   * The Ref associated with the repository's default branch.
   */
  defaultBranchRef: GitHubRespositoryRow_viewer_repositories_nodes_defaultBranchRef | null;
  /**
   * A list of users watching the repository.
   */
  watchers: GitHubRespositoryRow_viewer_repositories_nodes_watchers;
  /**
   * The number of kilobytes this repository occupies on disk.
   */
  diskUsage: number | null;
  /**
   * List of releases which are dependent on this repository.
   */
  releases: GitHubRespositoryRow_viewer_repositories_nodes_releases;
  /**
   * The repository's URL.
   */
  homepageUrl: any | null;
}

export interface GitHubRespositoryRow_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: GitHubRespositoryRow_viewer_repositories_pageInfo;
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (GitHubRespositoryRow_viewer_repositories_nodes | null)[] | null;
}

export interface GitHubRespositoryRow_viewer {
  __typename: "User";
  /**
   * A list of repositories that the user owns.
   */
  repositories: GitHubRespositoryRow_viewer_repositories;
}

export interface GitHubRespositoryRow {
  /**
   * The currently authenticated user.
   */
  viewer: GitHubRespositoryRow_viewer;
}

export interface GitHubRespositoryRowVariables {
  endCursor?: string | null;
}
