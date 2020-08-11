import { take, put, call, fork, all } from 'redux-saga/effects';
import {
  ADD_TO_CART_REQUEST,
} from '../types';
import {
  cartActionsCreator,
} from '../actions';
import { addToCart } from '../api';

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

function* watchAddToCart() {
  while(true) {
    const action = yield take(ADD_TO_CART_REQUEST);
    yield *addToCartSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchAddToCart),
  ]);
}
