import { take, put, call, fork, all } from 'redux-saga/effects';
import {
  USER_LOGIN_REQUEST,
} from '../types';
import {
  authActionsCreator,
} from '../actions';
import { login } from '../api';

function* loginSaga({ payload }) {
  try {
    const response = yield call(login, payload);
    if (response.success) {
      const user = {
        ...response.user,
        token: response.success.token,
      };
      yield put(authActionsCreator.userLoginSuccess({ user }));
    }
  } catch(err) {
    yield put(authActionsCreator.userLoginFailed({ error: err? err : 'User Login Failed!' }));
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
