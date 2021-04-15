import { put, takeEvery, all, select, call } from "redux-saga/effects";
import qs from "querystring";
import { Octokit } from "@octokit/rest";
// const graphql = require('@octokit/graphql');
import { graphql, GraphQlQueryResponseData } from "@octokit/graphql";
import query from "../api/gitHubGraphQlQuery";

let octokit = new Octokit();

export type Repository = {
  id: string;
  name: string;
  nameWithOwner: string;
  description: string;
  createdAt: Date;
  topics: string[];
  stars: number;
  language: string;
  isPrivate: boolean;
  isArchived: boolean;
  url: string;
  owner: string;
  isFork: boolean;
  licenseNickname: string;
  vulnerabilityAlerts: unknown[];
  collaborators: string[] | null;
  issueCount: number;
  pullRequestCount: number;
};

const authURL = "https://github-auth-backend-hugh.glitch.me/start_auth";

export function* init() {
  // get from local storage or get from url
  const query = qs.parse(window.location.search.substring(1));

  if (query.access_token) {
    yield put({
      type: "SET_ACCESS_TOKEN",
      access_token: query.access_token,
    });
    yield startLoadUser();
  }
}

export function* watchInit() {
  yield takeEvery("INIT", init);
}

export function* startLogIn() {
  const query = {
    redirect_uri: window.location.origin + window.location.pathname,
    scope: ["repo"],
  };

  const authProxyUrl = `${authURL}?${qs.stringify(query)}`;

  yield window.location.assign(authProxyUrl);
}

export function* watchStartLogIn() {
  yield takeEvery("START_LOG_IN", startLogIn);
}

type GitHubRepoQueryResponseType = {
  viewer: {
    repositories: {
      totalCount: number;
      pageInfo: {
        endCursor: string;
      };
      nodes: {
        id: string;
        name: string;
        nameWithOwner: string;
        description: string;
        createdAt: string;
        repositoryTopics: { nodes: { topic: { name: string } }[] };
        stargazers: { totalCount: number };
        primaryLanguage?: {
          name: string;
        };
        isPrivate: boolean;
        isArchived: boolean;
        url: string;
        owner: {
          login: string;
        };
        isFork: boolean;
        licenseInfo: {
          nickname: string;
          name: string;
        };
        vulnerabilityAlerts: { nodes: any[] };
        collaborators: {
          nodes: { login: string }[];
        };
        issues: {
          totalCount: number;
        };
        pullRequests: {
          totalCount: number;
        };
      }[];
    };
  };
};

export function* startLoadRepos(endCursor?: string): any {
  const accessToken = yield select((state) => state.accessToken);
  const user = yield select((state) => state.user.login);

  let data: GitHubRepoQueryResponseType;

  try {
    data = yield call(() =>
      graphql<GitHubRepoQueryResponseType>({
        query: query(endCursor ?? ""),
        headers: {
          authorization: `token ${accessToken}`,
          accept: "application/vnd.github.vixen-preview+json",
        },
      })
    );
  } catch (error) {
    console.log(error);
    data = error.data;
  }

  // TODO handle when error is null

  const repos = data.viewer.repositories.nodes.map((repo) => ({
    id: repo.id,
    name: repo.name,
    nameWithOnwer: repo.nameWithOwner,
    description: repo.description,
    createdAt: repo.createdAt,
    topics: repo.repositoryTopics.nodes.map((node) => node.topic.name),
    stars: repo.stargazers.totalCount,
    language: ((l) => l && l.name)(repo.primaryLanguage),
    isPrivate: repo.isPrivate,
    isArchived: repo.isArchived,
    url: repo.url,
    owner: repo.owner.login,
    isFork: repo.isFork,
    licenseNickname:
      repo.licenseInfo && (repo.licenseInfo.nickname || repo.licenseInfo.name),
    vulnerabilityAlerts: repo.vulnerabilityAlerts.nodes,
    collaborators:
      repo.collaborators &&
      repo.collaborators.nodes.filter((a) => a.login !== user),
    issueCount: repo.issues.totalCount,
    pullRequestCount: repo.pullRequests.totalCount,
  }));

  yield put({ type: "SET_REPOSITORIES", repositories: repos });

  const repoCount = yield select((state) => state.repositories.length);
  if (repoCount < data.viewer.repositories.totalCount) {
    yield startLoadRepos(data.viewer.repositories.pageInfo.endCursor);
  }
}

export function* watchLoadRepositories() {
  yield takeEvery("START_LOAD_REPOSITORIES", startLoadRepos);
}

function* refresh() {
  yield put({ type: "DELETE_REPOSITORIES" });
  yield startLoadRepos();
}

export function* watchRefresh() {
  yield takeEvery("REFRESH_REPOSITORIES", refresh);
}

export function* startLoadUser(): any {
  const accessToken = yield select((state) => state.accessToken);

  octokit = new Octokit({
    auth: `token ${accessToken}`,
  });

  const repo = {
    owner: "hughrawlinson",
    repo: "github-repo-organizer",
  };

  const { data } = yield call(() => octokit.users.getAuthenticated());
  if (data.login !== "hughrawlinson") {
    try {
      yield call(() =>
        octokit.activity.checkRepoIsStarredByAuthenticatedUser(repo)
      );
    } catch (e) {
      yield call(() => octokit.activity.starRepoForAuthenticatedUser(repo));
    }
  }
  yield put({ type: "SET_USER", user: data });
  yield startLoadRepos();
}

export function* watchLoadUser() {
  yield takeEvery("START_LOAD_USER", startLoadUser);
}
export default function* rootSaga() {
  yield all([
    watchInit(),
    watchStartLogIn(),
    watchLoadRepositories(),
    watchLoadUser(),
    watchRefresh(),
  ]);
}
