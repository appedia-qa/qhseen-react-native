import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
} from 'react-native';

import {
  Header,
  Text,
  Slider,
  Card,
  Touchable,
} from '../../components';
import {screens} from '../../config';
import {images ,height} from '../../constants';
import {CategoryTile} from './category-tile/category-tile';
import styles from './category-detail.style';

class CategoryDetail extends Component {
  _sliderContent = () => {
    return [1,2,2,2].map(item => {
      return (
        <Image
          source={images.category_detail_cover} 
          style={styles.sliderCategory}
          resizeMode= 'cover'
        />
      );
    });
  }
  
  render() {
    const category = this.props.route.params.item;
    console.log(category);
    return (
      <View style={styles.screen}>
        <Header/>
        <View style={styles.subHeaderContainer}>
          <View style={styles.buttonAlign}>
            <Touchable 
              style={styles.arrowBackground}
              onPress={()=>{this.props.navigation.navigate(screens.category)}}
            >
              <Image style={styles.arrow} source={images.back} />
            </Touchable>   
          </View>       
          <Text style={styles.headingText}>{category.name}</Text>
        </View>
        <Card style={styles.listContainer}>
          <ScrollView>
            <View>
            <FlatList
                data={category.product}
                renderItem={(item) => (
                  <View style={{ width: '50%', alignItems: 'center' }}>
                    <CategoryTile item={item}/>
                  </View>
                )}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ height: 13.5 }} />}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={{paddingBottom: 43}}
                showsVerticalScrollIndicator={false}
                bounces={false}
            />
            </View>
            <Slider
              sliderContainerStyles={styles.sliderContainer}
              renderedContent={this._sliderContent}
              paginationStyle={styles.paginationStyle}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}
            />
            <FlatList
                data={category.product}
                renderItem={(item) => (
                  <View style={{ width: '50%', alignItems: 'center' }}>
                    <CategoryTile item={item}/>
                  </View>
                )}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ height: 13.5 }} />}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={{marginTop: 14.5 ,paddingBottom:25}}
                showsVerticalScrollIndicator={false}
                bounces={false}
            />
            <Touchable>
              <Card style={styles.loadMoreContainer}>
                <Text style={styles.loadmoreText}>{'Load More'}</Text>
                <View
                  style={styles.iconLoadMoreAlign}
                >
                  <Image style={styles.iconLoadMore} source={images.chevron} />
                </View>         
              </Card>
            </Touchable>
          </ScrollView>
        </Card>
      </View>
    );
  }
}

export default CategoryDetail;
