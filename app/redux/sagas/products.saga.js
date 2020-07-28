import { take, put, call, fork, all } from 'redux-saga/effects';
import {
    FETCH_PRODUCTS_BY_CATEGORIES_REQUEST,
} from '../types';

import {
    fetchProductsActionsCreator,
  } from '../actions/products.actions';

import { fetchProductsByCategories } from '../api';

function* fetchProductsByCategoriesSaga({ payload }) {
  try {
    const response = yield call(fetchProductsByCategories, payload);
    yield put(fetchProductsActionsCreator.fetchProductsByCategoriesSuccess(response));
  } catch(err) {
    const error = err || 'PRODUCTS BY CATEGORIES CANNOT BE FIND';
    yield put(fetchProductsActionsCreator.fetchProductsByCategoriesFailed({error}));
  }
}

function* watchFetchfetchProductsByCategories() {
  while(true) {
    const action = yield take(FETCH_PRODUCTS_BY_CATEGORIES_REQUEST);
    yield *fetchProductsByCategoriesSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchFetchfetchProductsByCategories),
  ]);
}
