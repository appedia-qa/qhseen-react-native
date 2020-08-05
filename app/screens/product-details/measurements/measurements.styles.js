import { StyleSheet } from 'react-native';
import {width, height, getPercentageHeight, getPercentageWidth, COLOR} from '../../../constants';

const styles = StyleSheet.create({
  modalView:{
    alignSelf:'center',
    height:getPercentageHeight(699),
    width:getPercentageWidth(357),
    marginLeft:getPercentageWidth(9),
    marginRight:getPercentageWidth(9),

    backgroundColor:COLOR.WHITE
  },
  imageContainer:{
    height:getPercentageHeight(332),
    width:getPercentageWidth(248),
  },
  imageStyles:{
    height:getPercentageHeight(332),
    right:getPercentageWidth(43),
    top:getPercentageHeight(27)
  },
  errorMessageContainer:{
    marginTop:getPercentageHeight(45),
    marginLeft:getPercentageWidth(11),
    justifyContent:'center'
  },
  errorText:{
    color:COLOR.RED
  },
  fieldsContainer:{
    top:getPercentageHeight(17), 
    flexDirection:'row',
    flexWrap:'wrap'
  },
  labelTextStyles:{
    fontSize:14,
    color:COLOR.LOADMORE
  },
  dropdownContainerStyles:{
    height: getPercentageHeight(43), 
    width:getPercentageWidth(163),
    top:getPercentageHeight(4)
  },
  pickerStyles:{
    backgroundColor: COLOR.WHITE,
    borderColor:COLOR.BLACK
  },
  placeholderStyles:{
    color:COLOR.PROD_COLOR_1, 
    fontSize:16
  },
  buttonStylesSave:{
    height:getPercentageHeight(55), 
    width:getPercentageWidth(163),
    left:getPercentageWidth(11), 
    marginTop:getPercentageHeight(15),
    backgroundColor:COLOR.TEXT_PINK
  },
  buttonStylesCancel:{
    height:getPercentageHeight(55),  
    width:getPercentageWidth(163),
    marginLeft:getPercentageWidth(20), 
    marginTop:getPercentageHeight(15),
    backgroundColor:COLOR.BLACK
  },
  buttonTextStyles:{
    fontSize:20,
    color:COLOR.WHITE, 
    fontWeight:'bold'
  },
  itemStyles:{
    justifyContent: 'flex-start'
  }
});

export default styles;
