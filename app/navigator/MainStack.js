import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../config';
import Step1 from '../screens/onboarding/step1';
import Step2 from '../screens/onboarding/step2';
import Step3 from '../screens/onboarding/step3';
import Recommendations from '../screens/recommendations';
import SearchResult from '../screens/search-result';
const MainStack = createStackNavigator();

export default function mainStack() {
  return (
    <MainStack.Navigator
      headerMode='none'
    > 
      <MainStack.Screen  name={screens.step1} component={Step1} />
      <MainStack.Screen  name={screens.step2} component={Step2} />
      <MainStack.Screen  name={screens.step3} component={Step3} />
      <MainStack.Screen  name={screens.searchresult} component={SearchResult} />
      <MainStack.Screen  name={screens.recommendations} component={Recommendations} />
    </MainStack.Navigator>
  );
}