import React, { Component} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';

import {
  Text,
  Touchable,
  Header,
  Card,
} from '../../../components';
import {
  data,
} from '../../../constants';

import styles from './profile-section.style';

class ProfileSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile = data.profile;
    return (
      <View
        style={styles.screen}
      >
        <Header/>
        <View style={styles.contentContainer}>
          <Card style={styles.profileImage}>
            <View style={styles.profileEdit}/>
          </Card>
          <View style={styles.align}>
            <Text style={styles.heading}>User Name</Text>
            <ScrollView 
              style={{flex:1,paddingVertcal:15,}}
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              <Touchable onPress={()=>{}}>
                <View style={styles.details}>
                  <View style={styles.contain}>
                    <Image 
                      source={profile.personal} 
                      style={styles.Icon}
                      resizeMode='contain'
                    />
                    <Text style={styles.textDetail}>{profile.personalText}</Text>
                  </View>
                  <Image 
                    source={profile.chevron}
                    style={styles.button}
                  />   
                </View>
              </Touchable>
              <Touchable onPress={()=>{}}>
                <View style={styles.details}>
                  <View style={styles.contain}>
                    <Image 
                      source={profile.myorder} 
                      style={styles.Icon}
                      resizeMode='contain'
                    />
                    <Text style={styles.textDetail}>{profile.myorderText}</Text>
                  </View>                 
                  <Image 
                    source={profile.chevron}
                    style={styles.button}
                  />
                </View>
              </Touchable>
              <Touchable onPress={()=>{}}>
                <View style={styles.details}>
                  <View style={styles.contain}>
                    <Image 
                      source={profile.personal}
                      style={styles.Icon}
                      resizeMode='contain'
                    />
                    <Text style={styles.textDetail}>{profile.mymeasurementText}</Text>
                  </View>
                    <Image 
                      source={profile.chevron}
                      style={styles.button}
                    />
                </View>
              </Touchable>
              <Touchable>
              <View style={styles.details}>
                <View style={styles.contain}>
                  <Image 
                    source={profile.mywishlist}
                    style={styles.Icon}
                    resizeMode='contain'
                  />
                  <Text style={styles.textDetail}>{profile.mywishlistText}</Text>
                </View>
                <Image 
                  source={profile.chevron}
                  style={styles.button}
                />
              </View>
              </Touchable>
              <Touchable onPress={()=>{}}>
                <View style={styles.details}>
                  <View style={styles.contain}>
                    <Image 
                      source={profile.chevron}
                      style={styles.Icon}
                      resizeMode='contain'
                    />
                    <Text style={styles.textDetail}>{profile.paymentText}</Text>
                  </View>
                  <Image 
                    source={profile.chevron}
                    style={styles.button}
                  />
                </View>
              </Touchable>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileSection;