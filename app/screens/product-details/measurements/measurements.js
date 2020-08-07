import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';

import {
  Text,
  Input,
  Button,
} from '../../../components';
import {images, COLOR} from '../../../constants';
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
    return (
      <Modal isVisible={true}>
        <View style={measurementsStyles.modalView}>
          <ScrollView
            contentContainerStyle={measurementsStyles.scrollView}
          >
            <View style={measurementsStyles.imageContainer}>
              <Image
                source={images.clothMeasurement}
                style={measurementsStyles.imageStyles}
                resizeMode='contain'
              />
            </View>
            <View style={measurementsStyles.errorMessageContainer}>
              <Text style={measurementsStyles.errorText}>{this.state.ErrorMessage}</Text>
            </View>

            <View style={measurementsStyles.fieldsContainer}>
              <View style={measurementsStyles.row}>
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Bust Size'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Bust'}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Bottom Size'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Bottom Size'}
                />
              </View>

              <View style={measurementsStyles.row}>
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Arm'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Arm Hole Size'}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Waist Size'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Waist'}
                />
              </View>

              <View style={measurementsStyles.row}>
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Sleeve Size'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Sleeve Length'}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Shoulder Size'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Length'}
                />
              </View>

              <View style={measurementsStyles.row}>
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Hips'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Hips'}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Length Size'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Length'}
                />
              </View>
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
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

export default Measurements;
