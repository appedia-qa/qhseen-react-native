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
import styles from './product-tile.styles';

class ProductTile extends Component {
  render() {
    return (
      <Card style={styles.card}>
        <Touchable style={styles.container}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1518550687729-819219298d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }} 
            style={styles.productImage} />
          <Text
            style={styles.productName}
            numberOfLines={1}
          >
            Product Name 
          </Text>
          <Text style={styles.price}>
            QR 1000
          </Text>
        </Touchable>
      </Card>
    );
  }
}

export {ProductTile};
