import {StyleSheet} from 'react-native';
import {getPercentageHeight, getPercentageWidth, COLOR} from '../../../constants';
import {FontHelper} from '../../../helpers';

const styles = StyleSheet.create({
  modalView:{
    alignSelf:'center',
    height:getPercentageHeight(699),
    width:getPercentageWidth(357),
    marginLeft:getPercentageWidth(9),
    marginRight:getPercentageWidth(9),
    backgroundColor:COLOR.WHITE
  },
  scrollView: {
    paddingBottom: getPercentageHeight(95)
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
    width: '100%',
    top:getPercentageHeight(17), 
    flexDirection:'row',
    flexWrap:'wrap'
  },
  row: {
    width: getPercentageWidth(335),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:getPercentageHeight(15),
    marginLeft:getPercentageWidth(11),
  },
  fieldValueContainer: {
    height: getPercentageHeight(43), 
    width: getPercentageWidth(163),
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  fieldValue: {
    ...FontHelper({
      fontSize: 16,
      fontWeight: '300',
    }),
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
