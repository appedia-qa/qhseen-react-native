import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../config';
import BottomStack from './BottomTabStack';
import MainStack from './MainStack';

const RootNavigator = createStackNavigator();

export default function rootStack() {
  return (
    <RootNavigator.Navigator 
      headerMode='none'
    >
      <RootNavigator.Screen name={screens.mainStack} component={MainStack} />
      <RootNavigator.Screen name={screens.bottomTabs} component={BottomStack} />
    </RootNavigator.Navigator>
  );
}
