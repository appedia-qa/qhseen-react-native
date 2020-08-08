import React, { Component } from 'react';
import {
  View,
  Image,
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
    showWarning: false,
    ErrorMessage: '',
    burst: '11',
    bottomSize: '11',
    arm: '11',
    waist: '11',
    sleeveLength: '11',
    shoulderLength: '11',
    hips: '11',
    lengthSize: '11',
  };
  validateMeasurements = () => {
    const { burst, bottomSize, arm, waist, sleeveLength, shoulderLength, hips, lengthSize } = this.state;
    if (burst == '' || bottomSize == '' || arm == '' || waist <= 0 || sleeveLength == '' || shoulderLength == '' || hips == '' || lengthSize == '') {
      this.setState({
        ErrorMessage: "Please fill all the values",
        showWarning: true,
      });
    } else {
      this.props.saveMeasurements({
        burst, bottomSize, arm, waist, sleeveLength, shoulderLength, hips, lengthSize
      });
    }
  }
  render() {
    return (
      <Modal isVisible={this.props.visible}>
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
                  value={this.state.burst}
                  onChangeText={(text) => this.setState({ burst: text })}
                  showWarning={this.state.showWarning}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Bottom Size'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Bottom Size'}
                  keyboardType={'numeric'}
                  value={this.state.bottomSize}
                  onChangeText={(text) => this.setState({ bottomSize: text })}
                  showWarning={this.state.showWarning}
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
                  value={this.state.arm}
                  onChangeText={(text) => this.setState({ arm: text })}
                  showWarning={this.state.showWarning}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Waist'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Waist Size'}
                  keyboardType={'numeric'}
                  value={this.state.waist}
                  onChangeText={(text) => this.setState({ waist: text })}
                  showWarning={this.state.showWarning}
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
                  value={this.state.sleeveLength}
                  onChangeText={(text) => this.setState({ sleeveLength: text })}
                  showWarning={this.state.showWarning}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Length'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Shoulder Size'}
                  keyboardType={'numeric'}
                  value={this.state.shoulderLength}
                  onChangeText={(text) => this.setState({ shoulderLength: text })}
                  showWarning={this.state.showWarning}
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
                  value={this.state.hips}
                  onChangeText={(text) => this.setState({ hips: text })}
                  showWarning={this.state.showWarning}
                />
                <Input
                  containerStyles={measurementsStyles.fieldValueContainer}
                  placeholder={'Length'}
                  placeholderTextColor={COLOR.TEXT_GRAY}
                  style={measurementsStyles.fieldValue}
                  heading={'Length Size'}
                  keyboardType={'numeric'}
                  value={this.state.lengthSize}
                  onChangeText={(text) => this.setState({ lengthSize: text })}
                  showWarning={this.state.showWarning}
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
