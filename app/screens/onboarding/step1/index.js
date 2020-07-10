import {connect} from 'react-redux';
import Step1 from './step1';
import * as actions from '../../../redux/actions';

const mapStateToProps = ({onboardingData}) => ({
  onboardingData,
})

export default connect(mapStateToProps,actions)(Step1);