import React, { Component } from 'react';
import {
  Image,
  View,
} from 'react-native';

import {Text, Card, Touchable} from '../';
import {STORAGE_URL} from '../../config';
import styles from './intro-card.styles';

class IntroCard extends Component {
  render() {
    const {
      onCardPress,
      item,
      type
    } = this.props;
    return (
      <Card style={styles.introCard}>
        <Touchable
          style={{ width: '100%', alignItems: 'center' }}
          onPress={()=> onCardPress(item)}
        >
          <Image
            source={{uri: STORAGE_URL+type+'/'+ item.cover_img}}
            style={styles.introCover}
            resizeMode="cover"
          />
          <View style={styles.introImageContainer}>
            <Image
              source={{uri: STORAGE_URL+type+'/'+ item.profile_img}}
              style={styles.introImage}
              resizeMode='center'
            />
          </View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.message} numberOfLines={2}>{item.description? item.description : item.about_me}</Text>
        </Touchable>
      </Card>
    );
  }
}

export {IntroCard};
