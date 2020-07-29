import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';

import {
  Text,
  Button,
  Input,
  Card,
  Header,
} from '../../components';
import {screens} from '../../config';
import {COLOR} from '../../constants';
import styles from './shipping-address.style';

class ShippingAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saveAddress: true,
    };
  }
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Header
          placeholder={'Shipping Address'}
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
        <Card style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'Full Name *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <View style={styles.mNumberContainer}>
              <View style={{marginRight:30}}>
                <Text style={styles.mNumberText}>
                  {'Local Number'}
                </Text>
                <View style={styles.mNumbervalueContainer}>
                  <Text style={styles.mNumbervalue}>
                      {'+974'}
                  </Text>
                </View>
              </View>
              <View style={{flex:1}}>
                <Input
                  containerStyles={styles.inputContainer}
                  placeholder={'Mobile Number *'}
                  placeholderTextColor={COLOR.SHIPPING_TEXT}
                  underlineColorAndroid ='transparent'
                  style={styles.input}
                  onChangeText={(text) => {
                  }}
                />
              </View>
            </View>
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'City *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'Zone Number *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'Street Number *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'Street Number *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <View style={styles.checkboxContainer}>
              <Checkbox
              name='saveAddress'
              checked={this.state.saveAddress}
              size={14}
              style={styles.checkbox}
              onChange={(name, checked) => {this.setState({ [name] : checked })}}
              />
              <Text style={styles.checkboxFont}>
                {'Save address'}
              </Text>
            </View>
          </View>
        </Card>
        <Button
          buttonTitle={'CONTINUE TO PAYMENT'}
          buttonStyles={styles.confirm}
          buttonTitleStyles={styles.confirmTitle}
          onPress={()=>{this.props.navigation.navigate(screens.payment)}}
        />
      </ScrollView>
    );
  }
}

export default ShippingAddress;