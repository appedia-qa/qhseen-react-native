import React,{Component} from 'react';
import {
  View,
  Image,
} from 'react-native';

import {Button, Text} from '../../../components';
import {data} from '../../../constants';
import styles from './step1.style';

class Step1 extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const step1 = data.step1;
    return (
    <View style={{ backgroundColor: 'white',flex:1}}>
       <Image
        source={step1.step1Image}
        style={styles.step1Image}
        // resizeMode='cover'
      />
      <View style={styles.viewStyle}>
        <View style={styles.viewStyle2}>
          <Text style={styles.textStyle}>{step1.description}</Text>
        </View>
      </View>
      <Image
        source={step1.image}
        style={styles.logo}
      />
      <Button
        buttonStyles={styles.buttonStyles}
        onPress={()=>{console.log('1122')}}/>
    </View> 
  );
}
};

export default Step1;
