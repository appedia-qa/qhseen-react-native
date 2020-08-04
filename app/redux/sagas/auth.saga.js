import { take, put, call, fork, all } from 'redux-saga/effects';
import {
  USER_LOGIN_REQUEST,
  USER_SIGNUP_REQUEST,
} from '../types';
import {
  authActionsCreator,
} from '../actions';
import { login, signUp } from '../api';

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

function* signupSaga({ payload }) {
  try {
    const response = yield call(signUp, payload);
    if (response.success) {
      const user = {
        ...response.success.user,
        token: response.success.token,
      };
      yield put(authActionsCreator.userSignupSuccess({ user }));
    } 
  } catch(error) {
    yield put(authActionsCreator.userSignupRequest({ error: error? error : 'User Signup Failed' }));
  }
}

function* watchLogin() {
  while(true) {
    const action = yield take(USER_LOGIN_REQUEST);
    yield *loginSaga(action);
  }
}

function* watchSignup() {
  while(true) {
    const action = yield take(USER_SIGNUP_REQUEST);
    yield *signupSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchLogin),
    fork(watchSignup),
  ]);
}
