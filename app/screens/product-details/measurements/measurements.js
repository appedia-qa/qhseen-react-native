import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Modal from 'react-native-modal';

import {
  Text,
  Touchable,
  Button,
  Dropdown,
} from '../../../components';
import {images, getPercentageWidth, getPercentageHeight} from '../../../constants';
import measurementsStyles from './measurements.styles';

class Measurements extends Component {
  state = {
    Burst: 0,
    ErrorMessage: '',
    BaseWidth: 0,
    Arm: 0,
    Hips: 0,
    SleeveLength: 0,
    Length: 0,
    ErrorMessage: "",
  };
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
  render() {
    const burstItems = [
      { label: '20', value: 1 },
      { label: '30', value: 2 },
    ]
    return (
      <Modal isVisible={this.props.visible}>
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
              onPress={() => this.props.toggleModal()}
              buttonStyles={measurementsStyles.buttonStylesCancel}
              buttonTitle="Cancel"
              buttonTitleStyles={measurementsStyles.buttonTextStyles}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default Measurements;
