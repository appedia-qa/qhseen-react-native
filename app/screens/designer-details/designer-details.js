import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Header,
  Text,
  Touchable,
} from '../../components';
import {images, COLOR} from '../../constants';
import { STORAGE_URL,screens } from '../../config';
import styles from './designer-details.styles';

class DesignerDetails extends Component {
  render() {
    const designer = this.props.route.params.item;
    return (
      <View style={styles.screen}>
        <Header
          onSearchPress={() =>      
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.recommendations,
            })
          }
        />
        <Image
          source={{uri: STORAGE_URL+'designers/'+designer.cover_img}}
          style={styles.designerCover}
          resizeMode= 'cover'
        />
        <View style={styles.designerAlign}>
          <View style={styles.contentContainer}>
            <View style={styles.profileImage}>
              <Image
                source={{uri: STORAGE_URL+'designers/'+designer.profile_img}}
                style={styles.image}
                resizeMode= 'contain'
              />
            </View>
            <View style={styles.align}>
              <ScrollView>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>{designer.name}</Text>
                  <View style={styles.locationContainer}>
                    <Ionicons name="location-sharp" style={{marginRight:8}} color={COLOR.PRIMARY_COLOR} size={12}/>
                    <Text style={styles.location}>{designer.location}</Text>
                  </View>
                </View>
                <View style={styles.aboutContainer}>
                  <Text style={styles.about}>{'About Me'}</Text>
                  <Text style={styles.message}>{designer.about_me}</Text>
                  <View style={styles.divider}/>
                  <Text style={styles.tagsHeading}>{'Tags'}</Text>
                </View>
                <FlatList
                  data={designer.tags}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.tagsContainer}>
                        <Text style={styles.tags}>{item}</Text>
                      </View>
                    );
                  }}
                  ItemSeparatorComponent={() => <View style={{ height: 13 }} />}
                  keyExtractor={(item, index) => String(index)}
                  style={{ flex: 1 }}
                  horizontal
                  contentContainerStyle={{marginLeft:25 ,marginBottom:10,}}
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                />
                <View style={styles.messageContainer}>          
                  <View style={styles.divider}/>
                  <Touchable style={styles.messageTouchable}>
                    <Text style={styles.messageLabel}>
                      Message Me
                    </Text>
                  </Touchable>
                </View>  
              </ScrollView> 
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default DesignerDetails;
