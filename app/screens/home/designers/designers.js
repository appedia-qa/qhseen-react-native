import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';

import { STORAGE_URL } from '../../../config';
import {Text,Touchable} from '../../../components';
import {screens} from '../../../config';

import {data} from '../../../constants';
import styles from './designers.style';

class Designers extends Component {
  _renderItem = (item) => {
    const designers = item;
    return (
      <> 
        <Touchable style={styles.subContainer} onPress={()=>this.props.navigation.navigate(screens.designerStack, {
          screen:screens.designerdetail,
          params:{
            item: designers
          }
          })}>
          <Image
            source={{uri: designers.cover_image !== undefined ? designers.cover_image : designers.profile_image}}
            style={styles.designImage}
          />
          <Text style={styles.designName}>{designers.name}</Text>
          <Text style={styles.designLocation}>{designers.store_location}</Text>
        </Touchable>
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