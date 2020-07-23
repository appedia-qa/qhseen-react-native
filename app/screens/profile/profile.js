import React, { Component} from 'react';
import {
  View,
} from 'react-native';

import {
} from '../../components';
import Auth from '../auth';
import ProfileSection from './profile-section';
import styles from './profile.style';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        {
          !authData.data? 
          <Auth navigation={this.props.navigation} />
          :
          <ProfileSection />
        }
      </View>
    );
  }
}

export default Profile;