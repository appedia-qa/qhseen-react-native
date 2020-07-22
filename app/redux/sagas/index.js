import { fork, all } from 'redux-saga/effects';

import loginSaga from './auth.saga';

export default function* rootSaga() {
  yield all([
    fork(loginSaga),
  ]);
}
