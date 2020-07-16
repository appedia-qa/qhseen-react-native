import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';

import {
  Header,
  Touchable,
  Text,
} from '../../components';
import { COLOR, images } from '../../constants';
import {Login} from './login';
import {Signup} from './signup';
import styles from './auth.styles';

let authType = {
  LOGIN: 'LOG IN',
  SIGNUP: 'SIGN UP'
}

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAuthType: authType.LOGIN,
      showSocialAuthOptions: true,
    };

    this._onPressAuthType = this._onPressAuthType.bind(this);
  }

  _onPressAuthType(type) {
    if (this.state.selectedAuthType != type) this.setState({selectedAuthType: type});
  }

  render() {
    const {selectedAuthType} = this.state;
    return (
      <ScrollView style={styles.screen}>
        <Header />

        <View style={styles.authTypeContainer}>
          <Touchable onPress={()=> this._onPressAuthType(authType.LOGIN)}>
            <View style={styles.itemContainer}>
            <Text style={[
                styles.authItemText,
                selectedAuthType != authType.LOGIN? { color: COLOR.TEXT_GRAY } : null
              ]}>
                {authType.LOGIN}
              </Text>
              { (selectedAuthType == authType.LOGIN) &&
                  <View style={[styles.highlighter, styles.selectedAuthBar]} />
              }
            </View>
          </Touchable>

          <Touchable onPress={()=> this._onPressAuthType(authType.SIGNUP)}>
            <View style={styles.itemContainer}>
              <Text style={[
                styles.authItemText,
                selectedAuthType != authType.SIGNUP? { color: COLOR.TEXT_GRAY } : null
              ]}>
                {authType.SIGNUP}
              </Text>
              { (selectedAuthType == authType.SIGNUP) &&
                  <View style={[styles.highlighter, styles.selectedAuthBar]} />
              }
            </View>
          </Touchable>
        </View>
        {
          selectedAuthType === authType.LOGIN?
          <Login/>:
          selectedAuthType === authType.SIGNUP?
          <Signup/>:
          null
        }
        {
          this.state.showSocialAuthOptions ?
          <View style={styles.socialAuthContainer}>
            <Text style={styles.socialAuthHeader}>{'Or Join With'}</Text>
            <View style={styles.authIconsContainer}>
              <Touchable style={[styles.socialIconContainer, { marginRight: 30 }]}>
                <Image source={images.fbIcon} style={styles.socialIcon} resizeMode={'contain'} />
              </Touchable>
              <Touchable style={styles.socialIconContainer}>
                <Image source={images.googleIcon} style={styles.socialIcon} resizeMode={'contain'} />
              </Touchable>
            </View>
          </View> : null
        }
      </ScrollView>
    );
  }
}

export default Auth;
