import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {screens} from '../config';
import {icons} from '../helpers';
import App from '../screens/app/App';
import Cart from '../screens/cart/Cart';

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
      initialRouteName="screens.app"
      tabBarOptions= {barStyleIos.tabBarOptions}         
    >
      <BottomTabs.Screen
        name={screens.app}
        options={{
          tabBarLabel: screens.app,
          tabBarIcon:icons.home
          }}
        component={App}
      />
      <BottomTabs.Screen
        name='Cart'
        options={{
          tabBarLabel:'Cart',
          tabBarIcon:icons.home
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
      initialRouteName="screens.app"
      activeColor="#CE8677"
      inactiveColor="#8F8E93"
      barStyle= {styles.barStyle}            
    >
      <MaterialBottomTabs.Screen
        name={screens.app}
        options={{
          tabBarLabel: screens.app,
          tabBarIcon:icons.home
          }}
        component={App}
      />
      <MaterialBottomTabs.Screen
        name='Cart'
        options={{
          tabBarLabel:'Cart',
          tabBarIcon:icons.home
          }}
        component={Cart}
      />
    </MaterialBottomTabs.Navigator>
  );
}

export default isIos? materialTabNavigator : tabNavigator;
