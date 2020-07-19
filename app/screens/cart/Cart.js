import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text
} from 'react-native';

import { Header, CartTile} from '../../components';
import styles from './cart.style';

class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          onSearchPress={() => alert('asds')}
        />
        <View style={styles.headingContainer}>
          <Text style={styles.sectionHeading}>{'CART'}</Text>
        </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={styles.cartScrollView}>
           
            <FlatList
              data={[1,2,2,2,2,2,2]}
              renderItem={() => (
                <View style={styles.cardTileContainer}>
                  <CartTile/>
                </View>
              )}
              numColumns={1}
              ItemSeparatorComponent={() => <View style={{ height: 13.5 }} />}
              keyExtractor={(item, index) => String(index)}
              contentContainerStyle={{ paddingBottom: 5 }}
            />
          </ScrollView>
        </View>

    );
  }
}

export default Cart;