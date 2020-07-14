import React, { Component } from 'react';
import { View } from 'react-native';

import {ProductTile, Input, Header} from '../../components';
import { images } from '../../constants';
import styles from './home.styles';

class Home extends Component {
  render() {
    return (
      <View style={{}}>
      <Header
        onSearchPress={() => alert('asds')}
      />
      <View style={{ height: 100, }} />
      <ProductTile/>
      <Input
        containerStyles={{
          width: '86%',
          height: 40,
          paddingHorizontal: 7,
          alignItems: 'center',
        }}
        style={{
          height: 14,
        }}
        placeholder={'myemail@gmail.com'}
        placeholderTextColor={'#707070'}
      />
      </View>
    );
  }
}

export default Home;
