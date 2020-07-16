import React, { Component} from 'react';
import {
  View,
  Image,
} from 'react-native';

import {
  Text,
  Touchable,
} from '../../components';
import {
  data,
} from '../../constants';
import Auth from '../auth';
import ProfileSection from './profile-section';
import styles from './profile.style';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile = data.profile;
    return (
      <View style={styles.screen}>
        <Auth navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Profile;