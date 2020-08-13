import _ from 'lodash';
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILED,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILED,
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
    case UPDATE_CART_ITEM_REQUEST: {
      return {
        ...state,
        requesting: true,
      };
    }
    case UPDATE_CART_ITEM_SUCCESS: {
      const cartItems = _.map(state.data, cartItem => {
        if (cartItem.product_id == payload.cart_item.product_id) {
          return {
            ...cartItem,
            quantity: payload.cart_item.quantity
          };
        }
        return cartItem;
      })
      return {
        ...state,
        requesting: false,
        success: payload.success,
        data: cartItems,
      };
    }
    case UPDATE_CART_ITEM_FAILED: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    default: return state;
  }
}
