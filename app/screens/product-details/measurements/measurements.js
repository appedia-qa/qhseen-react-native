import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  Text,
  Input,
  Button,
} from '../../../components';
import {images, COLOR} from '../../../constants';
import measurementsStyles from './measurements.styles';

class Measurements extends Component {
  state = {
    ErrorMessage: '',
    burst: '',
    bottomSize: '',
    arm: '',
    waist: '',
    sleeveLength: '',
    shoulderLength: '',
    hips: '',
    lengthSize: '',
  };
  validateMeasurements = () => {
    const { burst, bottomSize, arm, waist, sleeveLength, shoulderLength, hips, lengthSize } = this.state;
    if (burst == '' || bottomSize == '' || arm == '' || waist <= 0 || sleeveLength == '' || shoulderLength == '' || hips == '' || lengthSize == '') {
      this.setState({
        ErrorMessage: "Please fill all the values"
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
          <KeyboardAwareScrollView
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
                  placeholder={'Burst Size'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Burst'}
                  keyboardType={'numeric'}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Bottom Size'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Bottom Size'}
                  keyboardType={'numeric'}
                />
              </View>

              <View style={measurementsStyles.row}>
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Arm'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Arm Hole Size'}
                  keyboardType={'numeric'}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Waist'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Waist Size'}
                  keyboardType={'numeric'}
                />
              </View>

              <View style={measurementsStyles.row}>
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Sleeve Length'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Sleeve Size'}
                  keyboardType={'numeric'}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Length'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Shoulder Size'}
                  keyboardType={'numeric'}
                />
              </View>

              <View style={measurementsStyles.row}>
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Hips'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Hips'}
                  keyboardType={'numeric'}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Length'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Length Size'}
                  keyboardType={'numeric'}
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
          </KeyboardAwareScrollView>
        </View>
      </Modal>
    );
  }
}

export default Measurements;
