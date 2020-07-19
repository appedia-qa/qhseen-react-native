import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

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
};

export { icons };
