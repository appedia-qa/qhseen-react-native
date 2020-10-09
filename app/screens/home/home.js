import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  Image,
  Alert
} from 'react-native';

import {ProductTile, Header, SnapCarousel, Touchable, Slider} from '../../components';
import {screens} from '../../config';
import { images } from '../../constants';
import {Brands} from './brands/index';
import {Designers} from './designers/index';
import {styles} from './home.styles';

class Home extends Component {

  componentDidMount() {
    this.props.fetchHomeRequest();
  }

  render() {
    const {homeData} = this.props;
    const {data} = homeData;
    console.log('homeData: ', homeData);
    return (
      <View style={styles.container}>
        <Header
          // search
          title={'Home'}
          leftIconPress={() => this.props.navigation.openDrawer()}
          onSearchPress={() =>      
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.sortresult,
            })
          }
          onSubmitEditing={()=>{    
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.searchresult,
            })
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.catalogueScrollView}>
          <SnapCarousel
            containerStyle={styles.carousalContainer}
            data={data ? data.banners : null}
          />
          <View style={styles.productsContainer}>
            <Text style={styles.sectionHeading}>{'DESIGNERS'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <Designers
              data={data ? data.designers : []}
            />
            <Text style={styles.sectionHeading}>{'OUTLETS'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <Brands
              data={data ? data.brands : []}
            />
            <Text style={styles.sectionHeading}>{'NEW COLLECTION'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <FlatList
              data={data ? data.featured_products : []}
              renderItem={({item}) => (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <ProductTile
                    item={item}
                    onPress={() => this.props.navigation.navigate(screens.mainStack, {
                      screen: screens.productDetails,
                      params: {
                        product: item,
                      }
                    })}
                  />
                </View>
              )}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{ height: 13.5 }} />}
              keyExtractor={(item, index) => String(index)}
              contentContainerStyle={{ paddingBottom: 5 }}
            />

            <Slider
              sliderContainerStyles={styles.sliderContainer}
              sliderImageStyles={styles.sliderImage}
            />

            <Text style={styles.sectionHeading}>{'MOST SELLING'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <FlatList
              data={data ? data.bestseller : []}
              renderItem={({item}) => (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <ProductTile
                    item={item}
                    onPress={() => this.props.navigation.navigate(screens.mainStack, {
                      screen: screens.productDetails,
                      params: {
                        product: item
                      }
                    })}
                  />
                </View>
              )}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{ height: 13.5 }} />}
              keyExtractor={(item, index) => String(index)}
              contentContainerStyle={{ paddingBottom: 5 }}
            />
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

export default Home;
