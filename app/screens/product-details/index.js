import {connect} from 'react-redux';
import ProductDetails from './product-details';
import {fetchProductsActionsCreator, userActionsCreator, cartActionsCreator} from '../../redux/actions';

const mapStateToProps = ({productsData, authData, userData}) => ({
  productsData,
  authData,
  userData,
});

export default connect(mapStateToProps, {
  ...fetchProductsActionsCreator,
  ...userActionsCreator,
  ...cartActionsCreator,
})(ProductDetails);
