import {combineReducers} from 'redux';

import onboardingData from './onboarding.reducer';
import authData from './auth.reducer';

export default combineReducers({
  onboardingData: onboardingData,
  authData,
})
