import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../config';
import Cart from '../screens/cart';
import Payment from '../screens/payment';

const CartStack = createStackNavigator();

export default function cartStack() {
  return (
    <CartStack.Navigator
      headerMode='none'
    > 
      <CartStack.Screen  name={screens.cart} component={Cart} />
      <CartStack.Screen  name={screens.payment} component={Payment} />
    </CartStack.Navigator>
  );
}