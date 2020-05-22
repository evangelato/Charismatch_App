import { put, takeLatest, all } from 'redux-saga/effects';
import { login, logout } from '../apis/authApi';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions/authActions';

function* requestLogin(): any {
  try {
    const response = yield login();
    yield put({ type: LOGIN_SUCCESS, response });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
  }
}

function* requestLoginWatcher(): any {
  yield takeLatest(LOGIN_REQUEST, requestLogin);
}

function* requestLogout(): any {
  try {
    const response = yield logout();
    yield put({ type: LOGOUT_SUCCESS, response });
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, error });
  }
}

function* requestLogoutWatcher(): any {
  yield takeLatest(LOGOUT_REQUEST, requestLogout);
}

export default function* authSaga(): any {
  yield all([requestLoginWatcher(), requestLogoutWatcher()]);
}
