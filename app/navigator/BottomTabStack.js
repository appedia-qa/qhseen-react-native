import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {screens} from '../config';
import {icons} from '../helpers';
import Profile from '../screens/profile/index';
import Home from '../screens/home';
import Designers from '../screens/designers';

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
          tabBarLabel: screens.home
        }}
        component={Home}
      />
      <BottomTabs.Screen
        name={screens.designers}
        options={{
          tabBarLabel: screens.designers
        }}
        component={Designers}
      />
      <BottomTabs.Screen
        name={screens.profile}
        options={{
          tabBarLabel: screens.profile,
          tabBarIcon:icons.profile
          }}
        component={Profile}
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
          tabBarLabel: screens.home
        }}
        component={Home}
      />
      <MaterialBottomTabs.Screen
        name={screens.designers}
        options={{
          tabBarLabel: screens.designers
        }}
        component={Designers}
      />
      <MaterialBottomTabs.Screen
        name={screens.profile}
        options={{
          tabBarLabel: screens.profile,
          tabBarIcon:icons.profile
          }}
        component={Profile}
      />
    </MaterialBottomTabs.Navigator>
  );
}

export default isIos? materialTabNavigator : tabNavigator;
