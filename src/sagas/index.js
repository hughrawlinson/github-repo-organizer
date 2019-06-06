import {
  put,
  takeEvery,
  all,
  select,
  call
} from 'redux-saga/effects';
import qs from 'querystring';
import Octokit from '@octokit/rest';
// const graphql = require('@octokit/graphql');
import graphql from '@octokit/graphql';

const octokit = new Octokit();

const authURL = 'https://github-auth-backend-hugh.glitch.me/start_auth';

export function* init() {
  // get from local storage or get from url
  const query = qs.parse(window.location.search.substring(1));

  if (query.access_token) {
    yield put({
      type: 'SET_ACCESS_TOKEN',
      access_token: query.access_token
    });
    yield startLoadUser();
  }
}

export function* watchInit() {
  yield takeEvery('INIT', init);
}

export function* startLogIn() {
  const query = {
    'redirect_uri': window.location.origin + window.location.pathname,
    'scope': ['repo']
  };

  const authProxyUrl = `${authURL}?${qs.stringify(query)}`;

  yield window.location = authProxyUrl;
}

export function* watchStartLogIn() {
  yield takeEvery('START_LOG_IN', startLogIn);
}

export function* startLoadRepos(endCursor) {
  const accessToken = yield select(state => state.accessToken);
  const user = yield select(state => state.user.login);

  const query = `query {
    viewer {
      repositories (first:100${endCursor ? ", after:\"" + endCursor + '"': ''}) {
        pageInfo {
          endCursor
        }
        totalCount,
        nodes {
          id,
          name,
          description,
          createdAt,
          repositoryTopics(first:100) {
            nodes {
              topic {
                id
                name
              }
            }
          }
          stargazers {totalCount},
          primaryLanguage {
            name
          }
          isPrivate
          isArchived
          issues (states: OPEN) {
            totalCount
          }
          owner {
            login
          }
          nameWithOwner
          url
          isFork
          licenseInfo {
            name
            nickname
          }
          vulnerabilityAlerts (first:50){
            nodes {
              packageName
              vulnerableManifestFilename
              vulnerableRequirements
              securityAdvisory {
                description
                summary
              }
            }
          }
          collaborators (first: 50){
            nodes {
              name
              login
            }
          }
        }
      }
    }
  }`

  let data;

  try {
    data = yield call(() => graphql({
      query,
      headers: {
        authorization: `token ${accessToken}`,
        accept: 'application/vnd.github.vixen-preview+json'
      }
    }));
  } catch (error) {
    data = error.data
  }

  // TODO handle when error is null

  const repos = data.viewer.repositories.nodes.map(repo => ({
    id: repo.id,
    name: repo.name,
    nameWithOnwer: repo.nameWithOwner,
    description: repo.description,
    createdAt: repo.createdAt,
    topics: repo.repositoryTopics.nodes.map(node => node.topic.name),
    stars: repo.stargazers.totalCount,
    language: (l => l && l.name)(repo.primaryLanguage),
    isPrivate: repo.isPrivate,
    isArchived: repo.isArchived,
    url: repo.url,
    owner: repo.owner.login,
    isFork: repo.isFork,
    licenseNickname: repo.licenseInfo && (repo.licenseInfo.nickname || repo.licenseInfo.name),
    vulnerabilityAlerts: repo.vulnerabilityAlerts.nodes,
    collaborators: repo.collaborators && repo.collaborators.nodes.filter(a => a.login !== user),
    issueCount: repo.issues.totalCount
  }));

  yield put({type: 'SET_REPOSITORIES', repositories: repos});

  const repoCount = yield select(state => state.repositories.length);
  if (repoCount < data.viewer.repositories.totalCount) {
    yield startLoadRepos(data.viewer.repositories.pageInfo.endCursor);
  }
}

export function* watchLoadRepositories() {
  yield takeEvery('START_LOAD_REPOSITORIES', startLoadRepos);
}

export function* startLoadUser() {
  const accessToken = yield select(state => state.accessToken);

  octokit.authenticate({
    type: 'oauth',
    token: accessToken
  });

  const repo = {
    owner: 'hughrawlinson',
    repo: 'github-repo-organizer'
  };

  const {data} = yield call(() => octokit.users.getAuthenticated());
  if (data.login !== 'hughrawlinson') {
    try {
      yield call(() => octokit.activity.checkStarringRepo(repo));
    } catch (e) {
      yield call(() => octokit.activity.starRepo(repo));
    }
  }
  yield put({type: 'SET_USER', user: data});
  yield startLoadRepos();
}

export function* watchLoadUser() {
  yield takeEvery('START_LOAD_USER', startLoadUser);
}
export default function* rootSaga() {
  yield all([
    watchInit(),
    watchStartLogIn(),
    watchLoadRepositories(),
    watchLoadUser()
  ]);
}
