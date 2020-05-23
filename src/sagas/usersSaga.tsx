import { put, takeLatest, all } from 'redux-saga/effects';
import { signUp } from '../apis/usersApi';
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../actions/userActions';

function* requestSignUp({ username, name, email, password }: any): any {
  try {
    const response = yield signUp(username, name, email, password);
    yield put({ type: SIGN_UP_SUCCESS, response });
  } catch (error) {
    yield put({ type: SIGN_UP_FAILURE, error });
  }
}

function* requestSignUpWatcher(): any {
  yield takeLatest(SIGN_UP_REQUEST, requestSignUp);
}

export default function* userSaga(): any {
  yield all([requestSignUpWatcher()]);
}
