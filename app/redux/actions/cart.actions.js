import {createAction} from 'redux-actions';

import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
} from '../types';

export const cartActionsCreator = {
  addToCartRequest: createAction(ADD_TO_CART_REQUEST),
  addToCartSuccess: createAction(ADD_TO_CART_SUCCESS),
  addToCartFailed: createAction(ADD_TO_CART_FAILED),
};
