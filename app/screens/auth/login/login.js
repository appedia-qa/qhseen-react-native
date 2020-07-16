import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';

import {
  Text, Input, Touchable, Button,
} from '../../../components';
import { COLOR, images } from '../../../constants';
import styles from './login.styles';

class Login extends Component {
  state = {
    rememberMe: false
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.inputHeading}>Email Address</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your email address'}
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

          />
        </View>
        <Touchable
          onPress={() => {}}
          style={styles.forgotPWCont}
        >
          <Text style={styles.forgotPW}>Forgot Password?</Text>
        </Touchable>
        <Button
          buttonTitle={'LOG IN'}
          buttonStyles={styles.loginButton}
          buttonTitleStyles={styles.loginButtonTitle}
        />
        <View style={styles.rememberMeContainer}>
          {/* <Touchable>
            <Image source={images.square} />
          </Touchable> */}
          <Checkbox
            name='rememberMe'
            checked={this.state.rememberMe}
            size={18}
            style={styles.checkbox}
            onChange={(name, checked) => {this.setState({ [name] : checked })}}
          />
          <Text style={styles.rememberMeText}>{'Remember Me'}</Text>
        </View>
      </View>
    );
  }
}

export {Login};
