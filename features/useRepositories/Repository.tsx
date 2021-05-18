export type Repository = {
  id: string;
  name: string;
  nameWithOwner: string;
  description: string | null;
  createdAt: Date;
  topics: string[];
  stars: number;
  language: string | null;
  isPrivate: boolean;
  isArchived: boolean;
  url: string;
  owner: string;
  isFork: boolean;
  licenseNickname: string | null;
  vulnerabilityAlerts: unknown[];
  collaborators: string[] | null;
  issueCount: number;
  pullRequestCount: number;
  codeOfConduct: string | null;
  defaultBranchName: string;
  watcherCount: number;
};
