import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const icons= {
  profile: ( {color} ) => (
    <Octicons name="person" color={color} size={26} />
  ),
};

export { icons };
