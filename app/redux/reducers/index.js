import {combineReducers} from 'redux';

import onboardingData from './onboarding.reducer';

export default combineReducers({
  onboardingData: onboardingData,
})
