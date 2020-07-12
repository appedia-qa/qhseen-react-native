import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

import {
  Text,
  Touchable,
  Card,
} from '../';
import { images, height } from '../../constants';
import styles from './product-tile.styles';

class ProductTile extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1518550687729-819219298d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }} 
          style={{
            width: '100%',
            aspectRatio: 0.96,
          }} />
        <Text>asdas</Text>
      </Card>
    );
  }
}

export {ProductTile};
