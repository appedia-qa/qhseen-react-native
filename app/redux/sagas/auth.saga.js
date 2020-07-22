import { take, put, call, fork, all } from 'redux-saga/effects';
import {
  USER_LOGIN_REQUEST,
} from '../types';
import { login } from '../api';

function* loginSaga({ payload }) {
  try {
    const response = yield call(login, payload);
    console.log(response);
  } catch(err) {
    console.log(err);
  }
}

function* watchLogin() {
  while(true) {
    const action = yield take(USER_LOGIN_REQUEST);
    yield *loginSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchLogin),
  ]);
}
