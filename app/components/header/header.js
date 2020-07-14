import React, { Component } from 'react';
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
import styles from './header.styles';

class Header extends Component {
  render() {
    const shadowStyles = !this.props.transparent? styles.shadowStyles : null;
    return (
      <SafeAreaView style={[styles.safeArea, shadowStyles, this.props.headerContainer]}>
        <View style={styles.headerContainer}>
          {
            this.props.onSearchPress?
            <Touchable
              onPress={this.props.onSearchPress}
              style={styles.searchContainer}
            >
              <Image source={images.search} style={styles.searchIcon} />
              <Text style={styles.searchText}>Search items</Text>
            </Touchable> :
            <Input
              containerStyles={[styles.searchContainer, { borderWidth: 0, }]}
              style={styles.searchText}
              placeholder={'Search items'}
              placeholderTextColor={COLOR.LIGHT_TEXT_EMPORER}
              leftIcon={images.search}
              leftIconStyles={styles.searchIcon}
            />
          }
          {/* <Image

          /> */}
        </View>
      </SafeAreaView>
    );
  }
}

export {Header};
