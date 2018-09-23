import {
  put,
  takeEvery,
  all,
  select,
  call
} from 'redux-saga/effects';
import qs from 'querystring';
import Octokit from '@octokit/rest';
const octokit = new Octokit();

const authURL = 'https://github-auth-backend-hugh.glitch.me/start_auth';

export function* init() {
  // get from local storage or get from url
  const query = qs.parse(window.location.search.substring(1));

  yield put({
    type: 'SET_ACCESS_TOKEN',
    access_token: query.access_token
  });
}

export function* watchInit() {
  yield takeEvery('INIT', init);
}

export function* startLogIn() {
  yield window.location = `${authURL}?redirect_uri=${window.location.href}`;
}

export function* watchStartLogIn() {
  yield takeEvery('START_LOG_IN', startLogIn);
}

export function* startLoadRepos() {
  const accessToken = yield select(state => state.accessToken);
  console.log(octokit);

  octokit.authenticate({
    type: 'oauth',
    token: accessToken
  });

  const {data} = yield call(() => octokit.repos.getAll({
    affiliation: 'owner'
  }));
  console.log(data);
  yield put({type: 'SET_REPOSITORIES', repositories: data});
}

export function* watchLoadRepositories() {
  yield takeEvery('START_LOAD_REPOSITORIES', startLoadRepos);
}

export default function* rootSaga() {
  yield all([
    watchInit(),
    watchStartLogIn(),
    watchLoadRepositories()
  ]);
}
