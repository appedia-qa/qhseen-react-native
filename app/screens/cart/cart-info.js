import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text
} from 'react-native';

import {COLOR} from '../../constants';
import {Header, Input, Touchable, Button,} from '../../components';
import {CartTile} from './cart-tile/cart-tile';
import styles from './cart-info.style';

class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          onSearchPress={() => alert('asds')}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.cartScrollView}>
          <View style={styles.cartView}>
            <Text style={styles.sectionHeading}>CART</Text>
            <FlatList
              data={[1,2,2,2,2]}
              showsVerticalScrollIndicator={false}
              renderItem={() => (
                <View style={styles.cardTileContainer}>
                  <CartTile/>
                </View>
              )}
              numColumns={1}
              ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
              keyExtractor={(item, index) => String(index)}
              contentContainerStyle={{ marginBottom: 95 }}
            />
            <View style={styles.couponContainer}>
              <Input
                  containerStyles={styles.inputContainer}
                  placeholder={'Enter Coupon Code'}
                  placeholderTextColor={COLOR.DESIGNER_LOC}
                  textAlign={'center'}
                  style={styles.input}
              />
              <Touchable style={styles.couponContainerButton}>
                <Text style={styles.couponButtonText}>{'ADD COUPON'}</Text>
              </Touchable>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.leftText}>{'Subtotal'}</Text>
                <Text style={styles.rightText}>{"QR 000.00"}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.leftText}>{'Discount'}</Text>
                <Text style={styles.rightText}>{'5%'}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.leftText}>{'Shipping'}</Text>
                <Text style={styles.rightText}>{'QR 000.00'}</Text>
              </View>
              <View style={styles.divider}/>
              <View style={styles.totalTextContainer}>
                <Text style={styles.total}>{'Total'}</Text>
                <Text style={styles.totalValue}>{'QR 000.00'}</Text>
              </View>
            </View>
            <Button
              buttonTitle={'CHECKOUT'}
              buttonStyles={styles.CheckoutButton}
              buttonTitleStyles={styles.CheckoutButtonTitle}
              onPress={() => {this.props.navigation.navigate(screens.shippingaddress)}}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Cart;