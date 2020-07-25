import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const icons= {
  profile: ( {color} ) => (
    <Octicons name="person" color={color} size={26} />
  ),
  home: ( {color} ) => (
    <Octicons name="home" color={color} size={26} />
  ),
  cart: ( {color} ) => (
    <Fontisto name="shopping-bag" color={color} size={26} />
  ),
  brand: ( {color} ) => (
    <FontAwesome name="stack-exchange" color={color} size={26} />
  ),
  designer: ( {color} ) => (
    <FontAwesome name="eercast" color={color} size={26} />
  ),
};

export { icons };
