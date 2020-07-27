import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image
} from 'react-native';

import {
  Header,
  Text,
  Slider,
  Card,
  Touchable,
} from '../../components';
import {screens} from '../../config';
import {images, data} from '../../constants';
import { STORAGE_URL } from '../../config';
import styles from './brands.styles';

class Brands extends Component {

  componentDidMount() {
    this.props.fetchBrandsRequest();
  }

  _sliderContent = () => {
    const {brandsData} = this.props;
    return brandsData.data !== null ? brandsData.data.ads.map(item => {
      return (
        <View style={styles.sliderContentContainer} key={item.id}>
          <Image
            source={{uri: STORAGE_URL+'brands/'+item.cover_img}} 
            style={styles.sliderDesigner}
          />
          <View style={styles.sliderContent}>
            <Text style={styles.sliderTitle}>{item.name}</Text>
            <Text style={styles.sliderDetails}>{item.description}</Text>
          </View>
        </View>
      );
    }) : [];
  }
  _renderItem = ({item}) => {
    return (
      <Card style={styles.designerCard}>
        <Touchable
          style={{ width: '100%', alignItems: 'center' }}
          onPress={()=>{this.props.navigation.navigate(screens.designerdetail,{item})}}
        >
          <Image
            source={{uri: STORAGE_URL+'brands/'+item.cover_img}}
            style={styles.designerCover}
            resizeMode="cover"
          />
          <View style={styles.designerImageContainer}>
            <Image
              source={{uri: STORAGE_URL+'brands/'+item.profile_img}}
              style={styles.designerImage}
              resizeMode='center'
            />
          </View>
          <Text style={styles.designerName}>{item.name}</Text>
          <Text style={styles.designerMessage}>{item.description}</Text>
        </Touchable>
      </Card>
    );
  }
  render() {
    const {brandsData} = this.props;
    return (
      <View style={styles.screen}>
        <Header
          transparent
        />
        <Slider
          sliderContainerStyles={styles.sliderContainer}
          renderedContent={this._sliderContent}
          paginationStyle={styles.paginationStyle}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={brandsData.data !== null ? brandsData.data.brands : []}
            renderItem={(item) => {
              return (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  {this._renderItem(item)}
                </View>
              );
            }}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.designerListContent}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </View>
      </View>
    );
  }
}

export default Brands;
