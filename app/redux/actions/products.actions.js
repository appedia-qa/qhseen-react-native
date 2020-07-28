import {createAction} from 'redux-actions';
import {
    FETCH_PRODUCTS_BY_CATEGORIES_REQUEST,
    FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS,
    FETCH_PRODUCTS_BY_CATEGORIES_FAILED,
} from '../types';

export const fetchProductsActionsCreator = {
    fetchProductsByCategoriesRequest: createAction(FETCH_PRODUCTS_BY_CATEGORIES_REQUEST),
    fetchProductsByCategoriesSuccess: createAction(FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS),
    fetchProductsByCategoriesFailed: createAction(FETCH_PRODUCTS_BY_CATEGORIES_FAILED),
}