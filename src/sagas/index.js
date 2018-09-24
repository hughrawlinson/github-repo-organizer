import {
  put,
  takeEvery,
  all,
  select,
  call
} from 'redux-saga/effects';
import qs from 'querystring';
import { GitHub } from 'github-graphql-api';
import Octokit from '@octokit/rest';

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

export function* startLoadRepos() {
  const accessToken = yield select(state => state.accessToken);

  const github = new GitHub({token: accessToken});

  const data = yield call(() => github.query(`
    query {
      viewer {
        repositories (first:100) {
          nodes {
            id,
            name,
            description,
            createdAt,
            isArchived,
            repositoryTopics(first:100) {
              nodes {
                topic {
                  id
                }
              }
            }
            stargazers {totalCount},
            primaryLanguage {
              name
            }
          }
        }
      }
    }`));

  const repos = data.viewer.repositories.nodes.map(repo => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    createdAt: repo.createdAt,
    isArchived: repo.isArchived,
    topics: repo.repositoryTopics.nodes,
    stars: repo.stargazers.totalCount,
    language: (l => l && l.name)(repo.primaryLanguage)
  }));

  yield put({type: 'SET_REPOSITORIES', repositories: repos});
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

  const {data} = yield call(() => octokit.users.get());
  yield put({type: 'SET_USER', user: data});
}

export function* watchLoadUser() {
  yield takeEvery('START_LOAD_USER', startLoadUser)
}
export default function* rootSaga() {
  yield all([
    watchInit(),
    watchStartLogIn(),
    watchLoadRepositories(),
    watchLoadUser()
  ]);
}
