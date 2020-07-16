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
import ProfileDetail from '../../components/profiledetails/profileDetail';
import ProfileSection from './profile-section';
import styles from './profile.style';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile = data.profile;
    return (
      <View
        style={styles.screen}
      >
        <ProfileSection/>
      </View>
    );
  }
}

export default Profile;