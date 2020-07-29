import {
    FETCH_PRODUCTS_BY_CATEGORIES_REQUEST,
    FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS,
    FETCH_PRODUCTS_BY_CATEGORIES_FAILED,
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
      case FETCH_PRODUCTS_BY_CATEGORIES_REQUEST: {
        return {
          ...state,
          requesting: true,
          error: null,
          success: null,
        };
      }
      case FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS: {
        return {
          requesting: false,
          data: payload.product,
        };
      }
      case FETCH_PRODUCTS_BY_CATEGORIES_FAILED: {
        return {
          requesting: false,
          error: payload.error,
          data: null,
        }
      }
      default: return state;
    }
}
  