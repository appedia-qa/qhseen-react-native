import React, { Component } from 'react';
import {} from 'react-native';

import {ProductTile, Input} from '../../components';
import { images } from '../../constants';
import styles from './home.styles';

class Home extends Component {
  render() {
    return (
      <>
      <ProductTile/>
      <Input
        containerStyles={{
          width: '86%',
          height: 40,
          paddingHorizontal: 7,
          alignItems: 'center'
        }}
        style={{
          height: 14,
        }}
        placeholder={'myemail@gmail.com'}
        placeholderTextColor={'#707070'}
      />
      </>
    );
  }
}

export default Home;
