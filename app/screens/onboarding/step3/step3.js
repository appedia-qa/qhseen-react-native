import React,{Component} from 'react';
import {
  View,
  Image,
} from 'react-native';
import {Button, Text, Logo} from '../../../components';
import {screens} from '../../../config';
import {images} from '../../../constants';
import styles from './step3.styles';

class Step3 extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View
      style={styles.screen}
      >
        <Image
          source={images.step3Image}
          style={styles.backgroundImage}
          resizeMode='stretch'
        />
        <View style={styles.contentContainer}>
          <Image
            source={images.step3Heading}
            style={styles.screenHeading}
            resizeMode='contain'
          />
          <Image
            source={images.step3SubHeading}
            style={styles.screenSubHeading}
            resizeMode='contain'
          />
          <Button
            buttonStyles={styles.buttonStyles}
          />
        </View>
      </View>
  );
}
};

export default Step3;