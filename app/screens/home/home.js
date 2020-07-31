import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  Image,
  Alert
} from 'react-native';

import {ProductTile, Header, SnapCarousel, Touchable, Slider,Button} from '../../components';
import { images } from '../../constants';
import {Brands} from './brands/index';
import {Designers} from './designers/index';
import {styles} from './home.styles';

class Home extends Component {

  constructor(props){
    super(props);
  }
 


  render() {
    return (
      <View style={styles.container}>
        <Header
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.catalogueScrollView}>
          <SnapCarousel
            containerStyle={styles.carousalContainer}
          />
          <View style={styles.productsContainer}>
            <Text style={styles.sectionHeading}>{'DESIGNERS'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <Designers/>
            <Text style={styles.sectionHeading}>{'OUR BRANDS'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <Brands/>
            <Text style={styles.sectionHeading}>{'NEW COLLECTION'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <FlatList
              data={[1,2,2,2,2,2,2]}
              renderItem={() => (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <ProductTile/>
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
              data={[1,2,2,2,2,2,2]}
              renderItem={() => (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <ProductTile/>
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

{/* <ProductTile/>
<Input
  containerStyles={{
    width: '86%',
    height: 40,
    paddingHorizontal: 7,
    alignItems: 'center',
  }}
  style={{
    height: 14,
  }}
  placeholder={'myemail@gmail.com'}
  placeholderTextColor={'#707070'}
/> */}
