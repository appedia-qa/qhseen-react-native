import {createAction} from 'redux-actions';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from '../types';

export const onboardingActionCreator = {
  userLoginRequest: createAction(USER_LOGIN_REQUEST),
  userLoginSuccess: createAction(USER_LOGIN_SUCCESS),
  userLoginFailed: createAction(USER_LOGIN_FAILED),
}
