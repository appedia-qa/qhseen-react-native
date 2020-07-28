import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  Image,
  Alert
} from 'react-native';

import {ProductTile, Header, SnapCarousel, Touchable, Slider,Button} from '../../components';
import { images } from '../../constants';
import {Brands} from './brands/index';
import {Designers} from './designers/index';
import {styles, measurementsStyles} from './home.styles';
import Modal from 'react-native-modal';
import {Dropdown} from './../../components/dropdown/index';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      isModalVisible:false,
      Burst:0,
      BaseWidth:0,
      Arm:0,
      Hips:0,
      SleeveLength:0,
      Length:0,
      ErrorMessage:""
    }
  }
 
  toggleModal=()=>{
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }
  validateMeasurements=()=>{
    const { Burst, BaseWidth, Arm,Hips,SleeveLength ,Length} = this.state;
    console.log(this.state);
    if(Burst<=0 || BaseWidth <=0 || Arm<=0 || Hips <=0 || SleeveLength <=0 || Length<=0){
      this.setState({
        ErrorMessage:"Please select all values."
      });
    }else{
      this.setState({
        ErrorMessage:""
      });
    }
  }
  render() {
    //Items data will be made for each dropdown in this fashion
    const burstItems=[
      {label: '20', value: 1},
      {label: '30', value: 2},
    ]
    return (
      <View style={styles.container}>
        <Header
          onSearchPress={()=>this.toggleModal()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.catalogueScrollView}>
          <SnapCarousel
            containerStyle={styles.carousalContainer}
          />
          <View style={styles.productsContainer}>
            <Text style={styles.sectionHeading}>{'DESIGNERS'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <Designers/>
            <Text style={styles.sectionHeading}>{'OUR BRANDS'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <Brands/>
            <Text style={styles.sectionHeading}>{'NEW COLLECTION'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <FlatList
              data={[1,2,2,2,2,2,2]}
              renderItem={() => (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <ProductTile/>
                </View>
              )}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{ height: 13.5 }} />}
              keyExtractor={(item, index) => String(index)}
              contentContainerStyle={{ paddingBottom: 5 }}
            />

            <Slider
              sliderContainerStyles={styles.sliderContainer}
              sliderImageStyles={styles.sliderImage}
            />

            <Text style={styles.sectionHeading}>{'MOST SELLING'}</Text>
            <Touchable
              onPress={() => {}}
              style={{alignSelf: 'flex-end', marginRight: 16, marginBottom: 11}}
            >
              <Text style={styles.viewAll}>{'View All'}</Text>
            </Touchable>
            <FlatList
              data={[1,2,2,2,2,2,2]}
              renderItem={() => (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <ProductTile/>
                </View>
              )}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{ height: 13.5 }} />}
              keyExtractor={(item, index) => String(index)}
              contentContainerStyle={{ paddingBottom: 5 }}
            />
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
                OuterContainerStyles={{zIndex:6000}}
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
                OuterContainerStyles={{zIndex:6000}}
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
                placeholderStyle={{color:'#3A333E80', fontSize:16}}
                selectedLabelStyle={{color:'#3A333E80', fontSize:16}}
                arrowSize={20}
              />
              <Dropdown
                OuterContainerStyles={{zIndex:5900}}
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
                OuterContainerStyles={{zIndex:5900}}
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
                OuterContainerStyles={{zIndex:5800}}
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
                OuterContainerStyles={{zIndex:5800}}
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
                  onPress={()=>this.validateMeasurements()}
                  buttonStyles={measurementsStyles.buttonStylesSave}
                  buttonTitle="Save Size"
                  buttonTitleStyles={measurementsStyles.buttonTextStyles}
               />
               <Button
                  onPress={()=>this.toggleModal()}
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

export default Home;

{/* <ProductTile/>
<Input
  containerStyles={{
    width: '86%',
    height: 40,
    paddingHorizontal: 7,
    alignItems: 'center',
  }}
  style={{
    height: 14,
  }}
  placeholder={'myemail@gmail.com'}
  placeholderTextColor={'#707070'}
/> */}
