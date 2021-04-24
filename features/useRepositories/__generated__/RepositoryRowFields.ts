/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepositoryRowFields
// ====================================================

export interface RepositoryRowFields_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
}

export interface RepositoryRowFields_issues {
  __typename: "IssueConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface RepositoryRowFields_pullRequests {
  __typename: "PullRequestConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface RepositoryRowFields_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface RepositoryRowFields_licenseInfo {
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

export interface RepositoryRowFields_collaborators_nodes {
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

export interface RepositoryRowFields_collaborators {
  __typename: "RepositoryCollaboratorConnection";
  /**
   * A list of nodes.
   */
  nodes: (RepositoryRowFields_collaborators_nodes | null)[] | null;
}

export interface RepositoryRowFields_repositoryTopics_nodes_topic {
  __typename: "Topic";
  id: string;
  /**
   * The topic's name.
   */
  name: string;
}

export interface RepositoryRowFields_repositoryTopics_nodes {
  __typename: "RepositoryTopic";
  /**
   * The topic.
   */
  topic: RepositoryRowFields_repositoryTopics_nodes_topic;
}

export interface RepositoryRowFields_repositoryTopics {
  __typename: "RepositoryTopicConnection";
  /**
   * A list of nodes.
   */
  nodes: (RepositoryRowFields_repositoryTopics_nodes | null)[] | null;
}

export interface RepositoryRowFields_codeOfConduct {
  __typename: "CodeOfConduct";
  /**
   * The formal name of the Code of Conduct
   */
  name: string;
}

export interface RepositoryRowFields {
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
  primaryLanguage: RepositoryRowFields_primaryLanguage | null;
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
  issues: RepositoryRowFields_issues;
  /**
   * A list of pull requests that have been opened in the repository.
   */
  pullRequests: RepositoryRowFields_pullRequests;
  /**
   * The User owner of the repository.
   */
  owner: RepositoryRowFields_owner;
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
  licenseInfo: RepositoryRowFields_licenseInfo | null;
  /**
   * A list of collaborators associated with the repository.
   */
  collaborators: RepositoryRowFields_collaborators | null;
  /**
   * A list of applied repository-topic associations for this repository.
   */
  repositoryTopics: RepositoryRowFields_repositoryTopics;
  /**
   * Returns the code of conduct for this repository
   */
  codeOfConduct: RepositoryRowFields_codeOfConduct | null;
}
