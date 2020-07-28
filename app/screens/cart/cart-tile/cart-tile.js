import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';

import {
  Text,
  Touchable,
  Card,
} from '../../../components';
import styles from './cart-tile.style';
import { images } from '../../../constants';

class CartTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible:false,
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
  toggleModal=()=>{
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }
  render() {
    return (
      <Card style={styles.card}>
        <View style={styles.firstContainer}>
          <Image source={images.cartImage} style={styles.image}/>
          <Touchable style={styles.noteTextContainer}>
            <Text style={styles.noteText}>Add Note </Text>
            <FontAwesome5 name="comment" color={"#CE8678"} size={25} />
          </Touchable>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.secondInnerContainer}>
            <View style={styles.productContainer}>
              <Text style={styles.productNameText}>Product Name</Text>
              <Text style={styles.designerNameText}>Designer Name</Text>
              <Text style={styles.price}>QR 250</Text>
            </View>
            <Touchable onPress={()=>this.toggleModal()} style={styles.trashContainer}>
              <Image source={images.trash} style={styles.trashIcon}/>
            </Touchable>
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
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.deleteConfirmationDialogue}>
            <View style={styles.deleteConfirmationTextBox}>
              <Text style={styles.deleteConfirmationText}>Are you sure you want to delete this item from your Cart?</Text>
            </View>
            <View style={styles.deleteButtonsContainer}>
            <Touchable style={styles.deleteButtonsSubContainerCancel} onPress={()=>this.toggleModal()}>
              <Text style={styles.deleteCancelStyles}>Cancel</Text>
            </Touchable> 
            <Touchable style={styles.deleteButtonsSubContainer} onPress={()=>this.toggleModal()}>
              <Text style={styles.deleteOkStyles}>Ok</Text>
            </Touchable> 
            </View>
          </View>
        </Modal>
      </Card>
    );
  }
}

export {CartTile};
