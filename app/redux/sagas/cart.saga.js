import { take, put, call, fork, all } from 'redux-saga/effects';
import {
  ADD_TO_CART_REQUEST,
  FETCH_CART_REQUEST,
  UPDATE_CART_ITEM_REQUEST,
} from '../types';
import {
  cartActionsCreator,
} from '../actions';
import { addToCart, fetchCart, updateCartItem } from '../api';

function* addToCartSaga({payload}) {
  try {
    const response = yield call(addToCart, payload);
    const cart_item = {
      ...response.cart_item,
      products: response.product_detail,
    };
    yield put(cartActionsCreator.addToCartSuccess({cart_item, success: response.message}));
  } catch (error) {
    error = 'Item cannot be added to cart.'
    yield put(cartActionsCreator.addToCartFailed({error}));
  }
}

function* fetchCartSaga({payload}) {
  try {
    const response = yield call(fetchCart, payload);
    yield put(cartActionsCreator.fetchCartSuccess({cart: response.data.cart.cart_items}));
  } catch (error) {
    console.log(error);
    yield put(cartActionsCreator.fetchCartFaied({error: 'No items found in cart.'}));
  }
}

function* updateCartItemSaga({payload}) {
  try {
    const response = yield call(updateCartItem, payload);
    const cart_item = {
      product_id: response.product_detail.id,
      quantity: response.cart_item.quantity,
    };
    yield put(cartActionsCreator.updateCartItemSuccess({cart_item, success: response.message}));
  } catch (error) {
    console.log(error);
    yield put(cartActionsCreator.updateCartItemFailed({error}));
  }
}

function* watchAddToCart() {
  while(true) {
    const action = yield take(ADD_TO_CART_REQUEST);
    yield *addToCartSaga(action);
  }
}

function* watchFetchCart() {
  while(true) {
    const action = yield take(FETCH_CART_REQUEST);
    yield *fetchCartSaga(action);
  }
}

function* watchUpdateCartItem() {
  while(true) {
    const action = yield take(UPDATE_CART_ITEM_REQUEST);
    yield *updateCartItemSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchAddToCart),
    fork(watchFetchCart),
    fork(watchUpdateCartItem),
  ]);
}
