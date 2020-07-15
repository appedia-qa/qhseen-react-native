import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList
} from 'react-native';

import {ProductTile, Header, SnapCarousel} from '../../components';
import { images } from '../../constants';
import styles from './home.styles';

class Home extends Component {
  render() {
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
          />
          <View style={styles.productsContainer}>
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
