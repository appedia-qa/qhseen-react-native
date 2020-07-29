import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,

  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
} from '../types';

const initialState = {
  requesting: false,
  error: null,
  success: null,

  data: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null,
        success: null,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        requesting: false,
        data: payload.user,
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        requesting: false,
        error: payload.error,
      }
    }
    case USER_SIGNUP_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null,
        success: null,
      };
    }
    case USER_SIGNUP_SUCCESS: {
      return {
        requesting: false,
        data: payload.user,
      };
    }
    case USER_SIGNUP_FAILED: {
      return {
        requesting: false,
        error: payload.error,
      }
    }
    
    default: return state;
  }
}
