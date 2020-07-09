import React,{Component} from 'react';
import {
  View,
  Image,
} from 'react-native';

import {Button, Text} from '../../../components';
import {screens} from '../../../config';
import {images} from '../../../constants';
import styles from './step2.styles';

class Step2 extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View
        style={styles.screen}
      >
        <Image
          source={images.step2Image}
          style={styles.backgroundImage}
          resizeMode='stretch'
        />
        <View style={styles.contentContainer}>
          <Image
            source={images.logo_icon_group}
            style={styles.logo}
          />
          <Text
            style={styles.screenMessage}
          >
            Requesting for custom design has never been earsier
          </Text>
          <Button
            buttonStyles={styles.buttonStyles}
            onPress={()=>this.props.navigation.navigate(screens.step3)}
          />
        </View>
      </View>
    );
  }
};

export default Step2;