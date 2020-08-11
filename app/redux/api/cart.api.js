import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function addToCart(params) {
  return API.fetch({
    url: `${SERVER_URL}${END_POINTS.add_to_cart}`,
    data: params,
    method: 'POST',
  }).then(response => response.data);
}
