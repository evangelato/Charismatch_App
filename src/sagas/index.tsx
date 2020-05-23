import { fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import usersSaga from './usersSaga';

export default function* rootSaga(): any {
  yield fork(authSaga);
  yield fork(usersSaga);
}
