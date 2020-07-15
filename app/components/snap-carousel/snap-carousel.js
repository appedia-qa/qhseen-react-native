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

class SnapCarousel extends Component {
  state = {
    activeSlide: 0,
  };
  _renderItem = ({item}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <Image
          source={item}
          style={styles.image}
        />
        {/* <View >
          <Text style={styles.title} numberOfLines={2}>
            asdasd asdasd asd asd
          </Text>
        </View> */}
      </View>
    );
  }
  _renderPagination = () => {
    return (
      <Pagination
        dotsLength={3}
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
          data={[
            { uri: 'https://i.imgur.com/2nCt3Sbl.jpg' },
            { uri: 'https://images.unsplash.com/photo-1518550687729-819219298d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' },
            { uri: 'https://i.imgur.com/2nCt3Sbl.jpg' },
          ]}
          renderItem={this._renderItem}
          sliderWidth={width}
          sliderHeight={height * 0.29}
          itemWidth={width * 0.88}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        />
        {this._renderPagination()}
      </View>
    );
  }
}

export {SnapCarousel};
