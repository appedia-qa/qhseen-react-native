import { fork, all } from 'redux-saga/effects';

import loginSaga from './auth.saga';
import designersSaga from './designers.saga';
import categoriesSaga from './categories.saga';
import brandsSaga from './brands.saga';
import homeSaga from './home.saga';
import productsSaga from './products.saga';
import userSaga from './user.saga';

export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(designersSaga),
    fork(categoriesSaga),
    fork(brandsSaga),
    fork(homeSaga),
    fork(productsSaga),
    fork(userSaga),
  ]);
}
