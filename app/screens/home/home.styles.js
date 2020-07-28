import { StyleSheet } from 'react-native';
import { width, height, COLOR, getPercentageHeight, getPercentageWidth } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catalogueScrollView: {
    flex: 1,
  },
  carousalContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.TEXT_CAMELOT,
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.TEXT_PINK,
  },
  productsContainer: {
    flex: 1,
    backgroundColor: COLOR.CONTAINER_SERENADE,
    paddingVertical: 10,
    alignItems: 'center',
  },
  sliderContainer: {
    marginVertical: 25,
  },
  sliderImage: {
    backgroundColor: 'black',
    borderRadius: 25,
  },
});
const measurementsStyles=StyleSheet.create({
  modalView:{
    height:getPercentageHeight(720),
    backgroundColor:'white'
  },
  imageContainer:{
    height:getPercentageHeight(470)
  },
  imageStyles:{
    height:getPercentageHeight(470),
    //left:63,
    right:getPercentageWidth(120),
    top:getPercentageHeight(120)
  },
  errorMessageContainer:{
    marginTop:getPercentageHeight(140),
    marginLeft:getPercentageWidth(70),
    justifyContent:'center'
  },
  errorText:{
    color:'red'
  },
  fieldsContainer:{
    top:getPercentageHeight(50), 
    flexDirection:'row',
    flexWrap:'wrap'
  },
  labelTextStyles:{
    fontSize:14,
    color:'#3A333E'
  },
  dropdownContainerStyles:{
    height: getPercentageHeight(200), 
    width:getPercentageWidth(250),
    top:getPercentageHeight(50)
  },
  pickerStyles:{
    backgroundColor: 'white',
    borderColor:'black'
  },
  placeholderStyles:{
    color:'#3A333E80', 
    fontSize:16
  },
  buttonStylesSave:{
    height:getPercentageHeight(210), 
    width:getPercentageWidth(250),
    left:getPercentageWidth(70), 
    marginTop:getPercentageHeight(50),
    backgroundColor:"#CE8678"
  },
  buttonStylesCancel:{
    height:getPercentageHeight(210),  
    width:getPercentageWidth(250),
    marginLeft:getPercentageWidth(85), 
    marginTop:getPercentageHeight(50),
    backgroundColor:"black"
  },
  buttonTextStyles:{
    fontSize:20,
    color:'white', 
    fontWeight:'bold'
  },
  itemStyles:{
    justifyContent: 'flex-start'
  }
});
export {styles, measurementsStyles};
