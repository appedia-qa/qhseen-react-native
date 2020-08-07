import React, { Component } from 'react';
import {
  FlatList, Image, View, SafeAreaView
} from 'react-native';

import {
  Text, Touchable
} from '../../components';

import {screens} from '../../config';
import { images } from '../../constants';
import styles from './sidebar.styles';

class Sidebar extends Component {
  state={
    selectedCategory: null,
  };
  componentDidMount() {
    this.props.fetchCategoriesRequest();
  }
  render() {
    const {categoriesData} = this.props;
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.header}>
          <Image source={images.userAccount} />
          <View style={{ flex: 1, marginLeft: 6, marginTop: 6 }}>
            <Text style={styles.userName}>Guest User</Text>
            <Text style={styles.loginAction}>Guest User</Text>
          </View>
          <Text style={styles.accountAction}>ACCOUNT</Text>
        </View>
        <View style={styles.headerSeperator} />

        <Touchable style={styles.rowItem} onPress={() => this.props.navigation.navigate(screens.designerStack)}>
          <Text style={styles.rowTitle}>Designers</Text>
        </Touchable>
        <Touchable style={[styles.rowItem, {paddingBottom: 20}]} onPress={() => this.props.navigation.navigate(screens.brandStack)}>
          <Text style={styles.rowTitle}>Brands</Text>
        </Touchable>
        <View style={styles.rowSeparator} />
        <FlatList
          data={categoriesData.data}
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
          <Text style={styles.rowTitle}>{item.name}</Text>
          <Text style={styles.plusSign}>{selectedCategory == index? '-' : '+'}</Text>
        </Touchable>
        {
          selectedCategory == index?
          <FlatList
            data={item.sub_categories}
            renderItem={({item, index}) => (
              <Touchable 
                style={styles.subCategoryContainer} 
                onPress={() => this.props.navigation.navigate(screens.mainStack, {
                  screen: screens.categorydetail,
                  params: {
                    item,
                  }
                })} 
              >
                <Text style={styles.subCategory}>{item.name}</Text>
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