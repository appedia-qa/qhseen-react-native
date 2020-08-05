import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text
} from 'react-native';

import {COLOR} from '../../constants';
import {screens} from '../../config';
import {Header, Input, Touchable, Button,} from '../../components';
import {CartTile} from './cart-tile/cart-tile';
import styles from './cart-info.style';
import { DeleteCartItemPopup } from './delete-cart-item/delete-cart-item';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible:false,
    };
  }
  toggleModal=()=> {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          placeholder={'Shopping Cart'}
          onSearchPress={() =>      
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.recommendations,
            })
          }
          onSubmitEditing={()=>{    
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.searchresult,
          })
          }}
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
                  <CartTile onPressDelete={()=>this.toggleModal()}/>
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
        <DeleteCartItemPopup isModalVisible={this.state.isModalVisible} onPressOk={()=>this.toggleModal()} onPressCancel={()=>this.toggleModal()} />
      </View>
    );
  }
}

export default Cart;