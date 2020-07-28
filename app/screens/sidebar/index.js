import { connect } from 'react-redux';
import Sidebar from './sidebar';

import { fetchCategoriesActionsCreator as categoriesActions } from '../../redux/actions/categories.actions';

const mapStateToProps = ({ categoriesData }) => ({
    categoriesData,
});

export default connect(mapStateToProps, {...categoriesActions})(Sidebar);
