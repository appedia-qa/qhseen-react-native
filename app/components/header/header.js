import React, { Component,useState } from 'react';
import {
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import {
  Text,
  Touchable,
  Input,
} from '../../components';
import {images, COLOR} from '../../constants';
import styles from './header.styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      onfocus: true,
    };
  }
  render() {
    const shadowStyles = this.props.absolute? styles.absoluteStyles : styles.shadowStyles;
    return (
      <SafeAreaView style={[styles.safeArea, shadowStyles, this.props.headerContainer]}>
        <View style={styles.headerContainer}>
          <Touchable
            onPress={()=>{}}
            style={{}}
          >
            <Image 
              source={images.drawer} 
              style={styles.drawer} 
              resizeMode= 'contain'  
            />
          </Touchable>
          <Input
            containerStyles={[styles.searchContainer, { borderWidth: 0,}]}
            style={styles.searchText}
            placeholder={this.props.placeholder? this.props.placeholder:'Search items'}
            placeholderTextColor={COLOR.BLACK}
            onChangeText={()=>{}}
            onSubmitEditing={this.props.onSubmitEditing}
            onFocus={()=>this.setState({onfocus : false})}
            onBlur={()=>this.setState({onfocus : true})} 
          />
          <View style={styles.bottomContainer}>
            
            <Touchable
              onPress={this.props.onSearchPress}
            >
            {this.state.onfocus?
              <Image source={images.search} style={styles.searchIcon} />
              :null}
            </Touchable>
            <Touchable>
              <ImageBackground
                source={images.notification} 
                style={styles.notify}
              >
                {this.state.counter ?
                <View style={styles.notificationTextView}>
                  <Text style={styles.notificationText}>
                    {this.state.counter}
                  </Text>
                </View>
                :null}
              </ImageBackground>
            </Touchable>           
          </View>  
        </View>
      </SafeAreaView>
    );
  }
}

export {Header};
