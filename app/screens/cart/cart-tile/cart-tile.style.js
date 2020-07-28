import { StyleSheet } from 'react-native';
import {width, height, COLOR, getPercentageHeight, getPercentageWidth} from '../../../constants';
import { get } from 'lodash';

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    height: height * 0.21798,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 1,
  },
  firstContainer: {
    marginTop: 14,
    marginBottom: 16,
    justifyContent:'space-around',
    marginLeft:11,
    flex:3,
  },
  image: {
    width: width * 0.27,
    aspectRatio: 1,
    alignSelf: 'center',
    // width: 101,
    // height: 101,
    borderRadius: 15,
  },
  noteTextContainer: {
    flexDirection: 'row',
    marginTop: 13,
    alignSelf: 'center',
  },
  noteText: {
    fontSize: 14,
    color: COLOR.PRIMARY_COLOR,
    fontWeight: '300',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },
  secondContainer: {
    marginTop: 14,
    marginBottom: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    flex:7,
  },
  secondInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 14,
    flex:1,
  },
  productContainer:{
  },
  productNameText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLOR.PRODUCT_TEXT,
  },
  designerNameText: {
    fontSize: 14,
    fontWeight: '300',
    color: COLOR.DESIGNER_LOC,
  },
  price:{
    fontSize: 18,
    fontWeight: '700',
    color: COLOR.QR,
  },
  trashContainer: {
    flex:1,
  },
  trashIcon: {
    width: 18,
    height: 20,
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  counterContainer: {
    alignSelf: 'flex-end',
    width: width * 0.379,
    height: undefined,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLOR.TEXT_LIGHT,
    marginRight: 16,
  },
  decrement: {
    borderRightColor: COLOR.TEXT_LIGHT,
    borderRightWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrementImage: {
    width: width * 0.05,
    height: 34,
    marginHorizontal: 10,
  },
  counterNumberStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterNumber: {
    fontSize: 30,
    fontWeight: '400',
    alignSelf : 'center',
  },
  increment: {
    borderLeftColor: COLOR.TEXT_LIGHT,
    borderLeftWidth: 1,
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
  },
  incrementImage: {
    width: width * 0.05,
    height: 34,
    marginHorizontal: 10,
  },
  deleteConfirmationDialogue:{
    width:getPercentageWidth(350), 
    backgroundColor:'white', 
    borderWidth:3, 
    height:getPercentageHeight(400),
    left:getPercentageWidth(100),
    borderColor:'#CE8678',
    borderRadius:10
  },
  deleteConfirmationTextBox:{
    paddingTop:getPercentageHeight(150),
    paddingLeft:getPercentageWidth(120),
    paddingRight:getPercentageWidth(120),
    borderBottomWidth:3,
    height:getPercentageHeight(330),
    borderColor:'#CE8678'
  },
  deleteConfirmationText:{
    color:'#82375C',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  deleteButtonsContainer:{
    flex:1, 
    flexDirection:'row',
    borderColor:'#CE8678',
    borderRadius:25
  },
  deleteButtonsSubContainer:{
    flex:1, 
    backgroundColor:'#CE8678', 
    justifyContent:'center', 
    alignItems:'center',
    borderColor:'#CE8678',
  },
  deleteButtonsSubContainerCancel:{
    flex:1, 
    backgroundColor:'white', 
    justifyContent:'center', 
    alignItems:'center'
  },
  deleteOkStyles:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },
  deleteCancelStyles:{
    fontSize:20,
    color:'#82375C',
    fontWeight:'bold'
  },

});

export default styles;
