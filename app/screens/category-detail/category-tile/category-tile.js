import React, { Component } from 'react';
import {
  Image,
} from 'react-native';

import {
  Text,
  Touchable,
  Card,
  Button,
} from '../../../components';
import styles from './category-tile.styles';
import { images } from '../../../constants';

class CategoryTile extends Component {
  render() {
    const product=this.props.item;
    return (
      <Card style={styles.card}>
        <Touchable style={styles.container} onPress={this.props.onPress}>
          
          <Image
            source={product.item.images} 
            style={styles.productImage} />
          <Text
            style={styles.productName}
            numberOfLines={1}
          >
            {product.item.productName} 
          </Text>
          <Text style={styles.price}>
            {product.item.price}
          </Text>
          <Button
            buttonStyles={styles.button}
            buttonTitle={'ADD TO CART'}
            buttonTitleStyles={styles.buttonTitle}
            rightIcon={<Image source={images.cart} />}
          />
        </Touchable>
      </Card>
    );
  }
}

export {CategoryTile};
