import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {
  Text,
} from '../../components';
import {width, images, height} from '../../constants';
import styles from './snap-carousel.styles';

import { STORAGE_URL } from '../../config';

class SnapCarousel extends Component {
  state = {
    activeSlide: 0,
  };
  _renderItem = ({item}, parallaxProps) => {
    let image = item.location ? STORAGE_URL+'designers/'+item.cover_img : item.status ? STORAGE_URL+'products/'+item.cover_img : STORAGE_URL+'brands/'+item.cover_img;
    console.log('image: ', image);
    return (
      <View style={styles.item}>
        <Image
          source={{uri: image}}
          style={styles.image}
        />
      </View>
    );
  }
  _renderPagination = (length) => {
    return (
      <Pagination
        dotsLength={length}
        activeDotIndex={this.state.activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.3}
        inactiveDotScale={1}
      />
    );
  }
  render() {
    return (
      <View style={this.props.containerStyle}>
        <Carousel
          data={this.props.data ? this.props.data : [
            'https://i.imgur.com/2nCt3Sbl.jpg',
            'https://images.unsplash.com/photo-1518550687729-819219298d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            'https://i.imgur.com/2nCt3Sbl.jpg',
          ]}
          renderItem={this._renderItem}
          sliderWidth={width}
          sliderHeight={height * 0.29}
          itemWidth={width * 0.88}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        />
        {this._renderPagination(this.props.data ? this.props.data.length : 3)}
      </View>
    );
  }
}

export {SnapCarousel};
