import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import {
  Header,
  Text,
  Touchable,
  Segment,
  Button,
  ProductTile,
} from '../../components';
import { screens } from '../../config';
import { images, getPercentageWidth, getPercentageHeight, COLOR } from '../../constants';
import Reviews from './reviews';
import Measurements from './measurements';
import styles from './product-details.styles';

class ProductDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      price: 'QR 150',
      productName: 'Product Name',
      description: 'Lorem Ipsum doesn’t exist because people think the content is meaningless window dressing, only there to be decorated by designers who can’t be bothered to read. Lorem Ipsum exists because words.',
      showSizesPopup: false,
      segment: {
        segmentTitles: [
          'Description',
          'Designed By Larissa S'
        ],
        selectedSegment: 0,

      },
      colors: {
        availableColors: [
          { value: COLOR.RED, name: 'RED' },
          { value: COLOR.GRAY, name: 'GRAY' },
          { value: COLOR.BLACK, name: 'BLACK' },
          { value: 'purple', name: 'PURPLE' }
        ],
      },
      userColorsSelections: {},

      materials: {
        availableMaterials: [
          { value: 'purple', name: 'PURPLE' },
          { value: COLOR.TEXT_PINK, name: 'PINK' },
          { value: COLOR.RED, name: 'RED' },
          { value: COLOR.GRAY, name: 'GRAY' },
        ],
      },
      userMaterialsSelections: {},

      isModalVisible: false,
      Burst: 0,
      BaseWidth: 0,
      Arm: 0,
      Hips: 0,
      SleeveLength: 0,
      Length: 0,
      ErrorMessage: ""
    };

  }
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }
  validateMeasurements = () => {
    const { Burst, BaseWidth, Arm, Hips, SleeveLength, Length } = this.state;
    console.log(this.state);
    if (Burst <= 0 || BaseWidth <= 0 || Arm <= 0 || Hips <= 0 || SleeveLength <= 0 || Length <= 0) {
      this.setState({
        ErrorMessage: "Please select all values."
      });
    } else {
      this.setState({
        ErrorMessage: ""
      });
    }
  }

  _handleSegmentPress(index) {
    this.setState({
      segment: {
        ...this.state.segment,
        selectedSegment: index
      }
    });
  }
  _renderGivenColors = () => {
    return (
      <View style={styles.selectColorsContainer}>
        <View style={styles.colorContainer}>
          {
            this.state.colors.availableColors.map((color, index) => (
              <View>
                <Touchable
                  onPress={() => {
                    this.setState({
                      userColorsSelections: {
                        ...this.state.userColorsSelections,
                        selectedColor: index
                      }
                    })
                  }}
                  style={[styles.color, { backgroundColor: color.value }]}
                >

                  {
                    this.state.userColorsSelections.selectedColor == index ? <Image source={images.check} style={styles.checkStyles} resizeMode='contain' /> : null
                  }
                </Touchable>
              </View>
            ))
          }
        </View>
      </View>
    );
  }
  _renderGivenMaterials = () => {
    return (
      <View style={styles.selectColorsContainer}>
        <View style={styles.colorContainer}>
          {
            this.state.materials.availableMaterials.map((material, index) => (
              <View>
                <Touchable
                  onPress={() => {
                    this.setState({
                      userMaterialsSelections: {
                        ...this.state.userMaterialsSelections,
                        selectedMaterial: index
                      }
                    })
                  }}
                  style={[styles.color, { backgroundColor: material.value }]}
                >

                  {
                    this.state.userMaterialsSelections.selectedMaterial == index ? <Image source={images.check} style={styles.checkStyles} resizeMode='contain' /> : null
                  }
                </Touchable>
              </View>
            ))
          }
        </View>
      </View>
    );
  }
  render() {
    const { productsData } = this.props.route.params;
    const burstItems = [
      { label: '20', value: 1 },
      { label: '30', value: 2 },
    ]
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header
          onSearchPress={() => alert('asds')}
          title='Product Description'
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.productScrollView}>
          <View style={{ marginTop: getPercentageHeight(30), marginBottom: getPercentageHeight(5), marginLeft: getPercentageWidth(5), flexDirection: 'row' }}>
            <AirbnbRating
              type='star'
              selectedColor={COLOR.TEXT_PINK}
              count={5}
              showRating={false}
              defaultRating={5}
              size={14}
              starStyle={{ margin: 2 }}
            />
            <Text style={{ color: COLOR.REVIEW_TEXT_1 }}> (No reviews)</Text>
          </View>
          <View styles={{ justifyContent: 'center' }}>

            <View>
              <Image
                style={styles.mainImage}
                source={images.productMain}
                resizeMode='contain'
              />
            </View>

            <View style={styles.codeContainer}>
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <Text style={styles.Code}>{this.state.price}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Image
                  style={styles.heart}
                  source={images.heartProd}
                  resizeMode='contain'
                />
              </View>

            </View>
            <View style={styles.ProductNameContainer}>
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <Text style={styles.ProdNameText}>{this.state.productName}</Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Segment
                // style={styles.segmentContainer}
                segmentStyles={styles.segmentContainer}
                segmentItemStyle={styles.segmentItemStyle}
                activeBorderColor={'black'}
                perIndexStyle={{
                  1: { flex: 2 },
                }}
                segmentText={{
                  fontSize: 14,
                }}
                segmentElements={this.state.segment.segmentTitles}
                selectedSegment={this.state.segment.selectedSegment}
                onPress={() => this._handleSegmentPress}
              >
                <View
                  style={styles.segmentContentContainer}
                  key={0}
                >
                  <Text style={styles.descriptionText}>
                    {this.state.description}
                  </Text>
                </View>
                <View key={1} />
                <View key={2} />
              </Segment>
            </View>
            <Touchable style={styles.takeMeasurementsContainer} onPress={() => this.toggleModal()}>
              <View style={styles.flexOneCenter}>
                <Image source={images.measurements} style={styles.measurementsStyles} resizeMode='contain' />
              </View>
              <View style={styles.flexOneCenter}>
                <Text>Take Measurements</Text>
              </View>
              <View style={styles.flexOneCenter}>
                <Image source={images.rightArrow} style={styles.rightArrow} resizeMode='contain' />
              </View>
            </Touchable>
            <View style={{ marginTop: getPercentageHeight(17) }}>
              <Text style={styles.colorHeading}>Select Color</Text>
              {this._renderGivenColors()}
            </View>
            <View style={{ marginTop: getPercentageHeight(17) }}>
              <Text style={styles.colorHeading}>Select Material</Text>
              {this._renderGivenMaterials()}
            </View>

            <Button
              buttonStyles={styles.button}
              buttonTitle={'ADD TO CART'}
              buttonTitleStyles={styles.buttonTitle}
              rightIcon={<Image source={images.cart} style={{width: getPercentageWidth(19), height:getPercentageHeight(24)}} resizeMode='contain' />}
            />
          </View>
          <View style={{ marginTop: getPercentageHeight(35) }}>
            <Text style={styles.similarItemText}>Similar Items</Text>
            <FlatList
              data={productsData.data}
              renderItem={(item) => (
                <View style={{ alignItems: 'center' }}>
                  <ProductTile item={item.item}
                    onPress={() => this.props.navigation.navigate(screens.categoryStack, {
                      screen: screens.productDetails,
                      params: {
                        productsData,
                      }
                    })}
                  />
                </View>
              )}
              //numColumns={2}
              horizontal={true}
              ItemSeparatorComponent={() => <View style={{ height: getPercentageHeight(13.5), width: getPercentageWidth(20) }} />}
              keyExtractor={(item, index) => String(index)}
              contentContainerStyle={{ marginTop: getPercentageHeight(14.5), paddingBottom: getPercentageHeight(25) }}
              showsVerticalScrollIndicator={false}
              bounces={false}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Touchable>
                <Image style={styles.arrowButtonImages} source={images.leftArrow} />
              </Touchable>
              <Touchable>
                <Image style={styles.arrowButtonImages} source={images.rightArrow} />
              </Touchable>
            </View>


          </View>
          <Reviews />
        </ScrollView>
        <Measurements
          visible={this.state.isModalVisible}
          toggleModal={() => this.toggleModal()}
          validateMeasurements={() => this.validateMeasurements()}
        />
      </View>
    );
  }
}

export default ProductDetails;
