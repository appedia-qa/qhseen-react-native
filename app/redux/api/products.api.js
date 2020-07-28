import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function fetchProductsByCategories(params) {
  return API.fetch({
    method: 'GET',
    url: `${SERVER_URL}${END_POINTS.products_by_categories}`,
    params: {
        category_id: params.category_id,
        sub_category_id: params.sub_category_id,
    }
  }).then(response => response.data);
}