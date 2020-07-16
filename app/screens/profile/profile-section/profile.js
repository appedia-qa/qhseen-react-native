import React, { Component} from 'react';
import {
  View,
  Image,
} from 'react-native';

import {
  Text,
  Touchable,
} from '../../../components';
import {
  data,
} from '../../../constants';
import ProfileDetail from '../../../components/profiledetails/profileDetail';

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
      <View style={styles.contentContainer}>
        <View style={styles.profileImage}>
          <View style={styles.profileEdit}/>
        </View>
        <View style={styles.align}>
          <Text style={styles.heading}>User Name</Text>
          <ProfileDetail 
            styles={styles} 
            Icon={profile.personal} 
            chevron={profile.chevron} 
            textValue={profile.personalText}
            //onPress={null}
          />
          <ProfileDetail 
            styles={styles} 
            Icon={profile.myorder} 
            chevron={profile.chevron} 
            textValue={profile.myorderText}
            //onPress={null}
          />
          <ProfileDetail 
            styles={styles} 
            Icon={profile.personal} 
            chevron={profile.chevron} 
            textValue={profile.mymeasurementText}
            //onPress={null}
          />
          <ProfileDetail 
            styles={styles} 
            Icon={profile.mywishlist} 
            chevron={profile.chevron} 
            textValue={profile.mywishlistText}
            //onPress={null}
          />
          <ProfileDetail 
            styles={styles} 
            Icon={profile.chevron} 
            chevron={profile.chevron} 
            textValue={profile.paymentText}
            //onPress={null}
          />
        </View>
      </View>
      </View>
    );
  }
}

export default Profile;