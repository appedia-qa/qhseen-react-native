import React, { Component } from 'react';
import {
  FlatList, Image, View, SafeAreaView
} from 'react-native';

import {
  Text, Touchable
} from '../../components';
import { images } from '../../constants';
import styles from './sidebar.styles';

const categories = [
  {
    title: 'Fashion',
    subCategories: [
      'subCategory',
      'subCategory',
      'subCategory'
    ],
  },
  {
    title: 'Beauty',
    subCategories: [
      'subCategory',
      'subCategory',
      'subCategory'
    ],
  },
  {
    title: 'Bags & accessories',
    subCategories: [
      'subCategory',
      'subCategory',
      'subCategory'
    ],
  },
  {
    title: 'Jewellery',
    subCategories: [
      'subCategory',
      'subCategory',
      'subCategory'
    ],
  },
];

class Sidebar extends Component {
  state={
    selectedCategory: null,
  };
  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.header}>
          <Image
            source={images.userAccount}
          />
          <View style={{ flex: 1, marginLeft: 6, marginTop: 6 }}>
            <Text style={styles.userName}>Guest User</Text>
            <Text style={styles.loginAction}>Guest User</Text>
          </View>
          <Text style={styles.accountAction}>ACCOUNT</Text>
        </View>
        <View style={styles.headerSeperator} />

        <Touchable
          style={styles.rowItem}
        >
          <Text style={styles.rowTitle}>Designers</Text>
        </Touchable>
        <Touchable
          style={[styles.rowItem, {paddingBottom: 20}]}
        >
          <Text style={styles.rowTitle}>Brands</Text>
        </Touchable>
        <View style={styles.rowSeparator} />
        <FlatList
          data={categories}
          renderItem={this._renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
          style={{width: '100%'}}
        />
      </SafeAreaView>
    );
  }

  _renderCategoryItem = ({item, index}) => {
    const {selectedCategory} = this.state;
    return (
      <>
        <Touchable
          style={styles.categoriesRow}
          onPress={() => {
            if (selectedCategory == index) {
              this.setState({ selectedCategory: null })
            } else {
              this.setState({ selectedCategory: index })
            }
          }}
        >
          <Text style={styles.rowTitle}>{item.title}</Text>
          <Text style={styles.plusSign}>{selectedCategory == index? '-' : '+'}</Text>
        </Touchable>
        {
          selectedCategory == index?
          <FlatList
            data={item.subCategories}
            renderItem={({item, index}) => (
              <Touchable
                style={styles.subCategoryContainer}
              >
                <Text style={styles.subCategory}>{item}</Text>
              </Touchable>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            keyExtractor={(item, index) => String(index)}
            style={{ marginBottom: 10 }}
          /> : null
        }
        <View style={styles.rowSeparator} />
      </>
    );
  }
}

export default Sidebar;
