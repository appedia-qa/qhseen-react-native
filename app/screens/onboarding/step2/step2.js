import React,{Component} from 'react';
import {
  View,Text
} from 'react-native';

class Step2 extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
    <View style={{ backgroundColor: 'white',flex:1}}>
      <Text>step2</Text>
    </View> 
  );
}
};

export default Step2;