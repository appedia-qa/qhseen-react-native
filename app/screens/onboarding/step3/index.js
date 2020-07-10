import {connect} from 'react-redux';
import Step3 from './step3';
import * as actions from '../../../redux/actions';

const mapStateToProps = ({onboardingData}) => ({
  onboardingData,
})

export default connect(mapStateToProps,actions)(Step3);