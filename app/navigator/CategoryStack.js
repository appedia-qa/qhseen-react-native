import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../config';
import Category from '../screens/category';
import CategoryDetail from '../screens/category-detail';

const CategoryStack = createStackNavigator();

export default function categoryStack() {
  return (
    <CategoryStack.Navigator
      headerMode='none'
    > 
      <CategoryStack.Screen  name={screens.category} component={Category} />
      <CategoryStack.Screen  name={screens.categorydetail} component={CategoryDetail} />
    </CategoryStack.Navigator>
  );
}