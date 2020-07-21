import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {screens} from '../config';
import {icons} from '../helpers';
import Profile from '../screens/profile/index';
import Home from '../screens/home';
import Cart from '../screens/cart';
import DesignerStack from '../navigator/DesignerStack';
import Category from '../screens/category';

import styles from './bottomTabStyle';

const isIos = Platform.OS === "ios"; 
const BottomTabs = createBottomTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const barStyleIos = {
  tabBarOptions:{
    activeTintColor: "#CE8677",      
    inactiveTintColor: "#8F8E93",  
    style:styles.barStyle ,
    labelStyle:styles.labelStyle,
    iconStyle:styles.iconStyle,
  }
};

function tabNavigator() {
  return(
    <BottomTabs.Navigator
      headerMode='none'
      tabBarOptions= {barStyleIos.tabBarOptions}         
    >
      <BottomTabs.Screen
        name={screens.home}
        options={{
          tabBarLabel: screens.home,
          tabBarIcon: icons.home, 
        }}
        component={Home}
      />
      <BottomTabs.Screen
        name={screens.category}
        options={{
          tabBarLabel: screens.category,
          tabBarIcon: icons.category,
        }}
        component={Category}
      />
      <BottomTabs.Screen
        name={screens.designerStack}
        options={{
          tabBarLabel: 'Designer',
          tabBarIcon: icons.designer,
        }}
        component={DesignerStack}
      />
      <BottomTabs.Screen
        name={screens.profile}
        options={{
          tabBarLabel: screens.profile,
          tabBarIcon: icons.profile,
          }}
        component={Profile}
      />
      <BottomTabs.Screen
        name={screens.cart}
        options={{
          tabBarLabel: screens.cart,
          tabBarIcon: icons.cart,
          }}
        component={Cart}
      />
    </BottomTabs.Navigator>
  );
}

function materialTabNavigator() {
  return (
    <MaterialBottomTabs.Navigator
      headerMode='none'
      activeColor="#CE8677"
      inactiveColor="#8F8E93"
      barStyle={styles.barStyle}
    >
      <MaterialBottomTabs.Screen
        name={screens.home}
        options={{
          tabBarLabel: screens.home,
          tabBarIcon: icons.home,
        }}
        component={Home}
      />
      <MaterialBottomTabs.Screen
        name={screens.category}
        options={{
          tabBarLabel: screens.category,
          tabBarIcon: icons.category,
        }}
        component={Category}
      />
      <MaterialBottomTabs.Screen
        name={screens.designerStack}
        options={{
          tabBarLabel: 'Designer',
          tabBarIcon: icons.designer,
        }}
        component={DesignerStack}
      />
      <MaterialBottomTabs.Screen
        name={screens.profile}
        options={{
          tabBarLabel: screens.profile,
          tabBarIcon: icons.profile,
        }}
        component={Profile}
      />
      <MaterialBottomTabs.Screen
        name={screens.cart}
        options={{
          tabBarLabel: screens.cart,
          tabBarIcon: icons.cart,
        }}
        component={Cart}
      />
    </MaterialBottomTabs.Navigator>
  );
}

export default isIos? materialTabNavigator : tabNavigator;
