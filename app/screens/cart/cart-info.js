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
import {DeleteCartItemPopup} from './delete-cart-item/delete-cart-item';
import styles from './cart-info.style';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible:false,
      modalData: null,
    };
  }
  
  componentDidMount() {
    const {authData} = this.props;
    if (authData.data) {
      this.props.fetchCartRequest({user_id: authData.data.id});
    }
  }

  deleteItem = () => {
    console.log(this.state.modalData);
    this.setState({isModalVisible: false});
  }
  
  showConfirmationModal = (cartItem) => {
    this.setState({
      isModalVisible: true,
      modalData: cartItem,
    });
  }

  _handleCounterPress = (cart_item, quantity) => {
    const {authData} = this.props;
    if (quantity == 0) {
      this.showConfirmationModal(cart_item);
    } else {
      const callback = () => {
        const {authData} = this.props;
        if (authData.data) {
          const params = {
            "user_id": authData.data.id,
            "product_id": cart_item.product_id,
            "quantity": quantity,
            "cart_id": cart_item.cart_id,
          };

          this.props.updateCartItemRequest(params);
        }
      }
      if (authData.data) {
        callback();
      } else {
        this.props.navigation.navigate(screens.mainStack, {
          screen: screens.auth,
          params: {
            callback,
            resetTo: screens.cart,
          },
        });
      }
    }
  }

  _renderCartItem = ({item}) => {
    return (
      <View style={styles.cardTileContainer}>
        <CartTile
          onPressDelete={this.showConfirmationModal}
          data={item}
          onCounterPress={this._handleCounterPress}
        />
      </View>
    );
  }

  render() {
    const {cartData} = this.props;
    return (
      <View style={styles.container}>
        <Header
          placeholder={'Shopping Cart'}
          leftIconPress={() => this.props.navigation.openDrawer()}
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
              data={cartData.data}
              showsVerticalScrollIndicator={false}
              renderItem={this._renderCartItem}
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
        <DeleteCartItemPopup
          cartItem={this.state.modalData}
          isModalVisible={this.state.isModalVisible}
          onPressOk={()=>this.deleteItem()}
          onPressCancel={()=>this.setState({isModalVisible: false, modalData: null})}
        />
      </View>
    );
  }
}

export default Cart;