import {combineReducers} from 'redux';

import onboardingData from './onboarding.reducer';
import authData from './auth.reducer';
import designersData from './designers.reducer';
import categoriesData from './categories.reducer';

export default combineReducers({
  onboardingData, authData, designersData, categoriesData
});
