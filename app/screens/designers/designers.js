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
import styles from './designers.styles';

class Designers extends Component {

  componentDidMount() {
    this.props.fetchDesignersRequest();
  }

  _sliderContent = () => {
    const {designersData} = this.props;
    return designersData.data !== null ? designersData.data.ads.map(item => {
      return (
        <View style={styles.sliderContentContainer} key={item.id}>
          <Image
            source={{uri: STORAGE_URL+'designers/'+item.cover_img}} 
            style={styles.sliderDesigner}
          />
          <View style={styles.sliderContent}>
            <Text style={styles.sliderTitle}>{item.name}</Text>
            <Text style={styles.sliderDetails}>{item.about_me}</Text>
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
            source={{uri: STORAGE_URL+'designers/'+item.cover_img}}
            style={styles.designerCover}
            resizeMode="cover"
          />
          <View style={styles.designerImageContainer}>
            <Image
              source={{uri: STORAGE_URL+'designers/'+item.profile_img}}
              style={styles.designerImage}
            />
          </View>
          <Text style={styles.designerName}>{item.name}</Text>
          <Text style={styles.designerMessage}>{item.about_me}</Text>
        </Touchable>
      </Card>
    );
  }
  render() {
    const {designersData} = this.props;
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
            data={designersData.data !== null ? designersData.data.designer : []}
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

export default Designers;
