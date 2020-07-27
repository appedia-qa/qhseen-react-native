import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text
} from 'react-native';

import {ProductTile, Header, SnapCarousel, Touchable, Slider} from '../../components';
import { images } from '../../constants';
import {Brands} from './brands/index';
import {Designers} from './designers/index';
import styles from './home.styles';

class Home extends Component {

  componentDidMount() {
    this.props.fetchHomeRequest();
  }

  render() {
    const {homeData} = this.props;
    const {data} = homeData;
    return (
      <View style={styles.container}>
        <Header
          onSearchPress={() => alert('asds')}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.catalogueScrollView}>
          <SnapCarousel
            containerStyle={styles.carousalContainer}
            data={data ? data.ads : null}
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
            <Text style={styles.sectionHeading}>{'OUR BRANDS'}</Text>
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
              data={data ? data.products : []}
              renderItem={(item) => (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <ProductTile item={item.item}/>
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
              data={data ? data.products : []}
              renderItem={(item) => (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <ProductTile item={item.item}/>
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
