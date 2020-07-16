import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';

import {Text} from '../../../components';
import {data} from '../../../constants';
import styles from './designers.style';

class Designers extends Component {
  _renderItem = (item) => {
    const designers = item;
    return (
      <> 
        <View style={styles.subContainer}>
          <Image
            source={designers.image}
            style={styles.designImage}
            // resizeMode='contain'
          />
          <Text style={styles.designName}>{designers.name}</Text>
          <Text style={styles.designLocation}>{designers.location}</Text>
        </View>
      </>
    );
  }
  render() {
    const designers = data.designers;
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={designers.data}
          keyExtractor={(data)=>{return data.location}}
          contentContainerStyle={{marginLeft: 3, paddingRight: 16}}
          renderItem={({item})=>{
            return(
              this._renderItem(item)
            );
          }}
        />
      </View>
    );
  }
}

export {Designers};