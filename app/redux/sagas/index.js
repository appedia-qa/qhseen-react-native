import { fork, all } from 'redux-saga/effects';

import loginSaga from './auth.saga';
import designersSaga from './designers.saga';
import categoriesSaga from './categories.saga';

export default function* rootSaga() {
  yield all([
    fork(loginSaga),fork(designersSaga),fork(categoriesSaga)
  ]);
}
