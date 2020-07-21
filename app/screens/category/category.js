import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ImageBackground
} from 'react-native';

import {
  Header,
  Text,
  Slider,
  Card,
  Touchable,
} from '../../components';
import {images, data} from '../../constants';
import styles from './category.style';

class Category extends Component {
  _sliderContent = () => {
    return [1,2,2].map(item => {
      return (
        <View style={styles.sliderContentContainer}>
          <Image
            source={images.category_cover} 
            style={styles.sliderCategory}
            //resizeMode= 'cover'
          />
          <View style={styles.sliderContent}>
            <Text style={styles.sliderTitle}>Dana</Text>
            <Text style={styles.sliderDetails}>Slogan or Catchy Product Ad statement</Text>
          </View>
        </View>
      );
    });
  }
  _renderItem = ({item}) => {
    return (
      <Touchable
        style={{ width: '100%', alignItems: 'center' }}
        onPress={()=>{}}
      >
        <ImageBackground
          source={item.image}
          style={styles.categoryCover}
          resizeMode="cover"
        >
          <Image source={images.rectangle} style={styles.categoryGradient}/>
          <Text style={styles.categoryName}>{item.name}</Text>
        </ImageBackground>
      </Touchable>
    );
  }
  render() {
    const {category} = data;
    return (
      <View style={styles.screen}>
        <Header
          transparent
        />
        <Slider
          sliderContainerStyles={styles.sliderContainer}
          renderedContent={this._sliderContent}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        />
        <Card style={styles.listContainer}>
          <FlatList
            data={category}
            renderItem={(item) => {
              return (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  {this._renderItem(item)}
                </View>
              );
            }}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 14}} />}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.categoryListContent}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </Card>
      </View>
    );
  }
}

export default Category;
