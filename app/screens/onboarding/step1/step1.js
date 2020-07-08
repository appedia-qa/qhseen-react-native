import React,{Component} from 'react';
import {
  View,
  Image,
} from 'react-native';

import {Button, Text} from '../../../components';
import {screens} from '../../../config';
import {data} from '../../../constants';
import styles from './step1.style';

class Step1 extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const step1 = data.step1;
    return (
    <View style={styles.screen}>
      <Image
        source={step1.step1Image}
        style={styles.backGroundImage}
      />
      <View style={styles.logoOuterStyle}>
        <View style={styles.logoInnerStyle}>
        </View>
        <Text style={styles.headingStyle}>
          QSHEEN
        </Text>
        <Text style={styles.subHeadingStyle}>
          LUXURY TALKS
        </Text>
      </View>
      <Button
        buttonStyles={styles.buttonStyles}
        onPress={()=>this.props.navigation.navigate(screens.step2)}/>
    </View> 
  );
}
};

export default Step1;
