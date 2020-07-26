import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';

import { STORAGE_URL } from '../../../config';
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
            source={{uri: STORAGE_URL+'designers/'+designers.profile_img}}
            style={styles.designImage}
          />
          <Text style={styles.designName}>{designers.name}</Text>
          <Text style={styles.designLocation}>{designers.location}</Text>
        </View>
      </>
    );
  }
  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(data)=>{return data.id.toString()}}
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