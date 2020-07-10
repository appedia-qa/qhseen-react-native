import {connect} from 'react-redux';
import Step2 from './step2';
import * as actions from '../../../redux/actions';

const mapStateToProps = ({onboardingData}) => ({
  onboardingData,
})

export default connect(mapStateToProps,actions)(Step2);