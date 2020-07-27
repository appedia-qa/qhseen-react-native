import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';

import {
  Text,
  Button,
  Input,
  Card,
  Touchable,
} from '../../components';
import {screens} from '../../config';
import {COLOR ,images, data,width} from '../../constants';
import styles from './recommendations.style';

class Recommendations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saveAddress: true,
    };
  }
  render() {
    const {recommendations} = data;
    return (
      <View style={styles.screen}>
        <Card style={styles.mainContainer}>
          <Text style={styles.heading}>{'Recommendations'}</Text>
          <FlatList
            data={recommendations.data}
            renderItem={({item}) => {
              return (
                <View style={styles.recommendContainer}>
                  <Text style={styles.textStyle}>{item.name}</Text>
                  <Image
                    source={images.chevron}
                    style={styles.chevron}
                  />
                </View>    
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 0.5 }} />}
            keyExtractor={(item, index) => String(index)}
            style={{ flex: 1}}
            contentContainerStyle={{marginLeft:20,marginRight:20, paddingBottom:30,}}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </Card>
      </View>
    );
  }
}

export default Recommendations;