import { put, takeEvery, all, select, call } from "redux-saga/effects";
import { graphql } from "@octokit/graphql";
import query from "../api/gitHubGraphQlQuery";
import { Convert, Data } from "../types/gitHubGraphQlQueryResponseType";
import {
  deleteRepositories,
  setRepositories,
} from "../features/RepositoryTable/repositoriesSlice";
import { RootState } from "..";
import { Repository } from "../features/RepositoryTable";

export function* startLoadRepos(endCursor: string | null, action: any): any {
  const { accessToken, login } = action.payload;
  let data: Data;

  try {
    const result = yield call(() =>
      graphql<Data>({
        query: query(endCursor ?? ""),
        headers: {
          authorization: `token ${accessToken}`,
          accept: "application/vnd.github.vixen-preview+json",
        },
      })
    );
    data = Convert.toGitHubRepoQueryResponseType(`{ data: ${result} }`).data;
  } catch (error) {
    console.log(error);
    data = error.data;
  }

  const repos: Repository[] = data.viewer.repositories.nodes.map((repo) => ({
    id: repo.id,
    name: repo.name,
    nameWithOwner: repo.nameWithOwner,
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
      repo.collaborators.nodes
        .filter((a) => a.login !== login)
        .map((collaborator) => collaborator.login),
    issueCount: repo.issues.totalCount,
    pullRequestCount: repo.pullRequests.totalCount,
  }));

  yield put(setRepositories({ repositories: repos }));

  const repoCount = yield select(
    (state: RootState) => state.repositoriesReducer.repositories?.length
  );
  console.log(repoCount);
  if (repoCount < data.viewer.repositories.totalCount) {
    yield startLoadRepos(data.viewer.repositories.pageInfo.endCursor, action);
  }
}

export function* watchLoadRepositories() {
  yield takeEvery("START_LOAD_REPOSITORIES", startLoadRepos, null);
}

export function* watchLoadReposWithAccessToken() {
  yield takeEvery("LOAD_REPOS_WITH_ACCESS_TOKEN", startLoadRepos, null);
}

function* refresh() {
  yield put(deleteRepositories());
  yield startLoadRepos(null, null);
}

export function* watchRefresh() {
  yield takeEvery("REFRESH_REPOSITORIES", refresh);
}

export default function* rootSaga() {
  yield all([
    watchLoadRepositories(),
    watchRefresh(),
    watchLoadReposWithAccessToken(),
  ]);
}
