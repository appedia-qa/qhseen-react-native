import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';

import {Card} from '../../../components';
import {data} from '../../../constants';
import styles from './brands.style';

class Brands extends Component {
  _renderItem = (item) => {
    const brands = item;
    return (
      <> 
        <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={brands.val}
            style={styles.brandImage}
            resizeMode='center'
          />
        </View>
        </Card>
      </>
    );
  }
  render() {
    const brands = data.brands;
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={brands.image}
          keyExtractor={(image) => {return(image.key)}}
          contentContainerStyle={{ marginLeft: 3, paddingRight: 16 }}
          renderItem={({item})=>{
            return(
              this._renderItem(item)
            );
          }}
        />
      </View>
    );
  }
}

export {Brands};