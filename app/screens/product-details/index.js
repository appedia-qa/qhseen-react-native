import {connect} from 'react-redux';
import ProductDetails from './product-details';
import {fetchProductsActionsCreator} from '../../redux/actions';

const mapStateToProps = ({productsData, authData}) => ({
  productsData,
  authData,
});

export default connect(mapStateToProps, {...fetchProductsActionsCreator})(ProductDetails);
