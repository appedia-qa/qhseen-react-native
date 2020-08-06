import {connect} from 'react-redux';
import ProductDetails from './product-details';
import {fetchProductsActionsCreator} from '../../redux/actions';

const mapStateToProps = ({productsData}) => ({
  productsData
});

export default connect(mapStateToProps, {...fetchProductsActionsCreator})(ProductDetails);
