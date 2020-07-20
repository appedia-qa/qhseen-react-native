import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Text,
  Touchable,
  Card,
  Button,
} from '../';
import styles from './cart-tile.style';
import { images } from '../../constants';

class CartTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter:1,
    };
    this._onPresscounter = this._onPresscounter.bind(this);
  }

  _onPresscounter(type){
    if(type === 'increment')
    {
      this.setState({counter:this.state.counter + 1,});
    }
    else if(type === 'decrement'){
      if(this.state.counter !== 1){
        this.setState({counter:this.state.counter - 1,});
      }
    }
  }

  render() {
    return (
      <Card style={styles.card}>
        <View style={styles.firstContainer}>
          {/* <View style={styles.imageContainer}> */}
            <Image source={images.cartImage} style={styles.image}/>
          {/* </View> */}
          {/* <View style={styles.noteTextContainer}> */}
            <Touchable style={styles.touchableContainer}>
              <Text style={styles.noteText}>Add Note </Text>
              <FontAwesome5 name="comment" color={"#CE8678"} size={25} />
            </Touchable>
          {/* </View> */}
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.secondInnerContainer}>
            <View style={styles.productContainer}>
              <Text style={styles.productNameText}>Product Name</Text>
              <Text style={styles.designerNameText}>Designer Name</Text>
              <Text style={styles.QRText}>QR 250</Text>
            </View>
            <View style={styles.iconContainer}>
              <Touchable>
                <Image source={images.trash} style={styles.icon}/>
              </Touchable>
            </View>
          </View>
          <View style={styles.counterContainer}>
            <Touchable style={styles.decrement} onPress={({type='decrement'})=>this._onPresscounter(type)}>
              <Image source={images.minus} style={styles.decrementImage}/>
            </Touchable> 
            <View style={styles.counterNumberStyle}>
              <Text style={styles.counterNumber}>{this.state.counter}</Text>
            </View>
            <Touchable style={styles.increment} onPress={({type='increment'})=>this._onPresscounter(type)}>
              <Image source={images.plus} style={styles.incrementImage}/>
            </Touchable> 
          </View>
        </View>  
      </Card>
    );
  }
}

export {CartTile};
