import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image
} from 'react-native';

import {
  Header,
  Text,
  Slider,
} from '../../components';
import {images, data} from '../../constants';
import styles from './designers.styles';

class Designers extends Component {
  _sliderContent = () => {
    return [1,2,2,2].map(item => {
      return (
        <View style={styles.sliderContentContainer}>
          <Image
            source={images.dana} 
            style={styles.sliderDesigner}
          />
          <View style={styles.sliderContent}>
            <Text style={styles.sliderTitle}>Dana</Text>
            <Text style={styles.sliderDetails}>Ad Slogan or message Goes here</Text>
          </View>
        </View>
      );
    });
  }
  render() {
    const {designers} = data;
    return (
      <View style={styles.screen}>
        <Header
          transparent
        />
        <Slider
          sliderContainerStyles={styles.sliderContainer}
          renderedContent={this._sliderContent}
          paginationStyle={styles.paginationStyle}
        />
        <View style={styles.listContainer}>

        </View>
      </View>
    );
  }
}

export default Designers;
