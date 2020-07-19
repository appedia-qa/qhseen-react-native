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
        <View style={styles.firstInnerContainer}>
          <View style={styles.imageContainer}>
            <Image source={images.cartImage} style={styles.image}/>
          </View>
          <View style={{marginTop:13}}>
            <Touchable style={styles.touchableContainer}>
              <Text style={styles.noteText}>Add Note </Text>
              <FontAwesome5 name="comment" color={"#CE8678"} size={35} />
            </Touchable>
          </View>
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
                <Text style={styles.decrementText}>{'-   '}</Text>
            </Touchable> 
            <Text style={styles.counterNumber}>{this.state.counter}</Text>
            <Touchable style={styles.increment} onPress={({type='increment'})=>this._onPresscounter(type)}>
                <Text style={styles.incrementText}>{'   +'}</Text>
            </Touchable> 
          </View>
        </View>  
      </Card>
    );
  }
}

export {CartTile};
