import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';

import {
  Text, Input, Touchable, Button,
} from '../../../components';
import {screens} from '../../../config';
import { COLOR, images } from '../../../constants';
import {SignupDesigner} from '../signupDesigner'
import styles from './signup.style';

class Signup extends Component {
  state = {
    design: false,
    terms: false,
  };
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.inputHeading}>Email Address or Phone Number</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your email address or Phone Number'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={{ height: 19 }} />
        <View>
          <Text style={styles.inputHeading}>Password</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your Password'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
            rightIcon={images.eyeOff}
            onRightIconsPress={()=>{}}
          />
        </View>
        <View style={{ height: 19 }} />
        <View>
          <Text style={styles.inputHeading}>Confirm Password</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your Password'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
            rightIcon={images.eyeOff}
            onRightIconsPress={()=>{}}
          />
        </View>
        <View style={{ height: 19 }} />
        <View style={styles.signDesignerContainer}>
          <Checkbox
            name='design'
            checked={this.state.design}
            size={18}
            style={styles.checkbox}
            onChange={(name, checked) => {this.props.selectDesignerSignup()}}
          />
          <Text style={styles.designerText}>{'Sign Up as A Designer'}</Text>
        </View>
        <Button
          buttonTitle={'SIGN UP'}
          buttonStyles={styles.SignButton}
          buttonTitleStyles={styles.SignButtonTitle}
          onPress={()=>{this.props.navigation.navigate(screens.profilesection)}}
        />
        <View style={styles.termsContainer}>
          <Checkbox
            name='terms'
            checked={this.state.terms}
            size={18}
            style={styles.checkbox}
            onChange={(name, checked) => {this.setState({ [name] : checked })}}
          />
          <Text style={styles.termsText}>{'By joining, you agree to our '}</Text>
          <Touchable style={styles.condition}>
            <Text style={styles.conditionText}>{'Terms and Conditions'}</Text>
          </Touchable>    
        </View>
      </View>
    );
  }
}

export {Signup};
