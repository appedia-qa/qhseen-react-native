import React, { Component,useState } from 'react';
import {
  View,
  Image,
  SafeAreaView,
} from 'react-native';

import {
  Text,
  Touchable,
  Input,
} from '../../components';
import {images, COLOR} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './header.styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWhich: false,
    };;
  }
  render() {
    const shadowStyles = this.props.transparent? styles.transparentStyles : styles.shadowStyles;
    return (
      <SafeAreaView style={[styles.safeArea, shadowStyles, this.props.headerContainer]}>
        <View style={styles.headerContainer}>
        <Touchable
          onPress={()=>{}}
        >
          <FontAwesome name="list-alt" color={COLOR.BLACK} size={30} />
        </Touchable>
            <Input
              containerStyles={[styles.searchContainer, { borderWidth: 0, }]}
              style={styles.searchText}
              placeholder={this.props.placeholder? this.props.placeholder:'Search items'}
              placeholderTextColor={COLOR.LIGHT_TEXT_EMPORER}
              onChangeText={()=>{}}
              onSubmitEditing={this.props.onSubmitEditing}
            />
            <Touchable
              onPress={this.props.onSearchPress}
            >
              <Image source={images.search} style={styles.searchIcon} />
            </Touchable>
        </View>
      </SafeAreaView>
    );
  }
}

export {Header};
