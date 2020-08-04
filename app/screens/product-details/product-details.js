import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

import {
  Header,
  Text,
  Touchable,
  Segment,
  Button,
  ProductTile
} from '../../components';
import { screens } from '../../config';
import { images, height, width, getPercentageWidth, getPercentageHeight, COLOR } from '../../constants';
//import {CategoryTile} from './category-tile/category-tile';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { CategoryTile } from '../category-detail/category-tile';
import * as Progress from 'react-native-progress';
import { styles, measurementsStyles } from './product-details.styles';
import Modal from 'react-native-modal';
import { Dropdown } from './../../components/dropdown/index';

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

              <View>

                <Button
                  buttonStyles={styles.button}
                  buttonTitle={'ADD TO CART'}
                  buttonTitleStyles={styles.buttonTitle}
                  rightIcon={<Image source={images.cart} style={{width: getPercentageWidth(19), height:getPercentageHeight(24)}} resizeMode='contain' />}
                />
              </View>
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
            <View style={{ marginTop: getPercentageHeight(40) }}>
              <View style={{ flexDirection: 'row' }}>
                <Touchable style={{ flex: 0.5 }}>
                  <Text style={{ fontSize: 16 }}>Reviews</Text>
                  <View style={styles.reviewBar}></View>
                </Touchable>
                <Touchable style={styles.noOfReviews}>
                  <Text style={styles.noOfReviewsText}>No. of Reviews</Text>
                </Touchable>
              </View>

              <Reviews theme={this.props.theme} />
            </View>
            <View style={styles.writeReviewContainer}>
              <Touchable>
                <Text style={styles.writeReviewText}>
                  Write a review
                        </Text>
              </Touchable>
            </View>
          </ScrollView>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={measurementsStyles.modalView}>
            <View style={measurementsStyles.imageContainer}>
              <Image source={images.clothMeasurement}
                style={measurementsStyles.imageStyles}
                resizeMode='contain'
              />
            </View>
            <View style={measurementsStyles.errorMessageContainer}>
              <Text style={measurementsStyles.errorText}>{this.state.ErrorMessage}</Text>
            </View>

            <View style={measurementsStyles.fieldsContainer}>

              <Dropdown
                OuterContainerStyles={{ zIndex: 6000 }}
                Label="Burst"
                labelTextStyles={measurementsStyles.labelTextStyles}
                items={burstItems}
                value={this.state.Burst}
                onChangeSelection={item => this.setState({
                  Burst: item.value
                })}
                dropDownContainerStyles={measurementsStyles.dropdownContainerStyles}
                pickerStyles={measurementsStyles.pickerStyles}
                dropDownStyles={measurementsStyles.pickerStyles}
                itemStyles={{
                  justifyContent: 'flex-start',
                }}
                placeholderText="Burst"
                placeholderStyle={measurementsStyles.placeholderStyles}
                selectedLabelStyle={measurementsStyles.placeholderStyles}
                arrowSize={20}
              />
              <Dropdown
                OuterContainerStyles={{ zIndex: 6000 }}
                Label="Base/Width"
                labelTextStyles={measurementsStyles.labelTextStyles}
                items={burstItems}
                value={this.state.BaseWidth}
                onChangeSelection={item => this.setState({
                  BaseWidth: item.value
                })}
                dropDownContainerStyles={measurementsStyles.dropdownContainerStyles}
                pickerStyles={measurementsStyles.pickerStyles}
                dropDownStyles={measurementsStyles.pickerStyles}
                itemStyles={{
                  justifyContent: 'flex-start',
                }}
                placeholderText="Base/Width"
                placeholderStyle={measurementsStyles.placeholderStyles}
                selectedLabelStyle={measurementsStyles.placeholderStyles}
                arrowSize={20}
              />
              <Dropdown
                OuterContainerStyles={{ zIndex: 5900 }}
                Label="Arm"
                labelTextStyles={measurementsStyles.labelTextStyles}
                items={burstItems}
                value={this.state.Arm}
                onChangeSelection={item => this.setState({
                  Arm: item.value
                })}
                dropDownContainerStyles={measurementsStyles.dropdownContainerStyles}
                pickerStyles={measurementsStyles.pickerStyles}
                dropDownStyles={measurementsStyles.pickerStyles}
                itemStyles={measurementsStyles.itemStyles}
                placeholderText="Arm"
                placeholderStyle={measurementsStyles.placeholderStyles}
                selectedLabelStyle={measurementsStyles.placeholderStyles}
                arrowSize={20}
              />
              <Dropdown
                OuterContainerStyles={{ zIndex: 5900 }}
                Label="Hips"
                labelTextStyles={measurementsStyles.labelTextStyles}
                items={burstItems}
                value={this.state.Hips}
                onChangeSelection={item => this.setState({
                  Hips: item.value
                })}
                dropDownContainerStyles={measurementsStyles.dropdownContainerStyles}
                pickerStyles={measurementsStyles.pickerStyles}
                dropDownStyles={measurementsStyles.pickerStyles}
                itemStyles={measurementsStyles.itemStyles}
                placeholderText="Hips"
                placeholderStyle={measurementsStyles.placeholderStyles}
                selectedLabelStyle={measurementsStyles.placeholderStyles}
                arrowSize={20}
              />
              <Dropdown
                OuterContainerStyles={{ zIndex: 5800 }}
                Label="Sleeve Length"
                labelTextStyles={measurementsStyles.labelTextStyles}
                items={burstItems}
                value={this.state.SleeveLength}
                onChangeSelection={item => this.setState({
                  SleeveLength: item.value
                })}
                dropDownContainerStyles={measurementsStyles.dropdownContainerStyles}
                pickerStyles={measurementsStyles.pickerStyles}
                dropDownStyles={measurementsStyles.pickerStyles}
                itemStyles={measurementsStyles.itemStyles}
                placeholderText="Sleeve Length"
                placeholderStyle={measurementsStyles.placeholderStyles}
                selectedLabelStyle={measurementsStyles.placeholderStyles}
                arrowSize={20}
              />
              <Dropdown
                OuterContainerStyles={{ zIndex: 5800 }}
                Label="Length"
                labelTextStyles={measurementsStyles.labelTextStyles}
                items={burstItems}
                value={this.state.Length}
                onChangeSelection={item => this.setState({
                  Length: item.value
                })}
                dropDownContainerStyles={measurementsStyles.dropdownContainerStyles}
                pickerStyles={measurementsStyles.pickerStyles}
                dropDownStyles={measurementsStyles.pickerStyles}
                itemStyles={measurementsStyles.itemStyles}
                placeholderText="Length"
                placeholderStyle={measurementsStyles.placeholderStyles}
                selectedLabelStyle={measurementsStyles.placeholderStyles}
                arrowSize={20}
              />
              <Button
                onPress={() => this.validateMeasurements()}
                buttonStyles={measurementsStyles.buttonStylesSave}
                buttonTitle="Save Size"
                buttonTitleStyles={measurementsStyles.buttonTextStyles}
              />
              <Button
                onPress={() => this.toggleModal()}
                buttonStyles={measurementsStyles.buttonStylesCancel}
                buttonTitle="Cancel"
                buttonTitleStyles={measurementsStyles.buttonTextStyles}
              />
            </View>
          </View>
        </Modal>
      </View>

    );
  }
}
const Reviews = ({ theme }) => (
  <View style={{ marginTop: getPercentageHeight(20), flexDirection: 'row' }}>
    <View style={{ flex: 0.2, marginRight: getPercentageWidth(20), justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: getPercentageHeight(80), width: getPercentageWidth(82), paddingHorizontal: getPercentageWidth(16), paddingVertical: getPercentageHeight(16), borderRadius: 16 }}>
        <Text style={styles.ratingCountText}>{'4.0'}</Text>
        <Text style={styles.ratingCountTextSmall}>{'Out of 5'}</Text>
      </View>

    </View>
    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', marginLeft: getPercentageHeight(11) }}>
      <View style={styles.propertiesContainer}>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.progressLableText}>
            {'Exellent'}
          </Text>
        </View>
        <View style={{ flex: 0.7 }}>
          <Progress.Bar
            animated
            borderWidth={0}
            unfilledColor={COLOR.PROD_COLOR_2}
            color={COLOR.TEXT_PINK}
            progress={0.7} width={getPercentageWidth(164)} />
        </View>
      </View>

      <View style={styles.propertiesContainer}>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.progressLableText}>
            {'Size'}
          </Text>
        </View>
        <View style={{ flex: 0.7 }}>
          <Progress.Bar
            animated
            borderWidth={0}
            unfilledColor={COLOR.PROD_COLOR_2}
            color={COLOR.TEXT_PINK}
            progress={0.4} width={getPercentageWidth(164)} />
        </View>
      </View>

      <View style={styles.propertiesContainer}>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.progressLableText}>
            {'Fabric'}
          </Text>
        </View>
        <View style={{ flex: 0.7 }}>
          <Progress.Bar
            animated
            borderWidth={0}
            unfilledColor={COLOR.PROD_COLOR_2}
            color={COLOR.TEXT_PINK}
            progress={0.2} width={getPercentageWidth(164)} />
        </View>
      </View>

      <View style={styles.propertiesContainer}>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.progressLableText}>
            {'Quality'}
          </Text>
        </View>
        <View style={{ flex: 0.7 }}>
          <Progress.Bar
            animated
            borderWidth={0}
            unfilledColor={COLOR.PROD_COLOR_2}
            color={COLOR.TEXT_PINK}
            progress={0.1} width={getPercentageWidth(164)} />
        </View>
      </View>

    </View>
  </View>
)

export default ProductDetails;
