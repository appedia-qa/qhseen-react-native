import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILED,
} from '../types';

const initial_state = {
  requesting: false,
  success: null,
  error: null,

  data: [],
};

export default function (state = initial_state, action) {
  const { payload, type } = action;
  switch(type) {
    case ADD_TO_CART_REQUEST: {
      return {
        ...state,
        requesting: true,
        success: null,
        error: null
      };
    }
    case ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        success: payload.success,
        data: [
          payload.cart_item,
          ...state.data,
        ],
      };
    }
    case ADD_TO_CART_FAILED: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    case FETCH_CART_REQUEST: {
      return {
        ...state,
        requesting: true,
      };
    }
    case FETCH_CART_SUCCESS: {
      return {
        ...state,
        requesting: false,
        data: payload.cart,
      };
    }
    case FETCH_CART_FAILED: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    default: return state;
  }
}
