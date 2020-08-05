import { StyleSheet } from 'react-native';
import { COLOR, width, height,getPercentageHeight,getPercentageWidth } from '../../constants';

const styles = StyleSheet.create({
  subHeaderContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: getPercentageHeight(17),
  },
  buttonAlign: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    ...StyleSheet.absoluteFillObject,
  },
  arrowBackground: {
    width: width * 0.0668,
    height: width * 0.0668,
    backgroundColor: COLOR.BACK,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: width * 0.0374,
    height: width * 0.0370,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.BLACK,
    alignSelf:'center',
    //marginLeft:width*0.248,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: getPercentageHeight(16),
    marginTop:getPercentageHeight(14),
  },
    productScrollView:{
        alignSelf:'center',
        width:'94%'
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: '700',
        color: COLOR.TEXT_CAMELOT,
        marginTop: getPercentageHeight(23),
        marginBottom: getPercentageHeight(11),
        alignSelf: 'center',
      },
      mainImage:{
          width:getPercentageWidth(351),
          height:getPercentageHeight(269),
          alignSelf:'center'
      },
      codeContainer:{
        flexDirection:'row',
        marginTop:getPercentageHeight(16)
      },
      heart:{
          width:getPercentageWidth(22),
          height:getPercentageHeight(25),
          alignItems:'flex-end'
      },
      Code:{
          fontSize:getPercentageHeight(24),
          fontWeight:'bold',
          //fontFamily:'SF Pro Display'
      },
      ProductNameContainer:{
          marginTop:getPercentageHeight(9),
      },
      ProdNameText:{
        fontSize:getPercentageHeight(26),
        fontWeight:'bold',
        //fontFamily:'SF Pro Display'
      },
      descriptionContainer:{
          flexDirection:'row',
          marginTop:getPercentageHeight(14),
          marginBottom:getPercentageHeight(20.1)
      },
      descriptionText:{
          color:COLOR.LIGHT_TEXT_EMPORER
      },
      takeMeasurementsContainer:{
          flex:1, 
          flexDirection:'row', 
          borderColor:COLOR.MERCURY, 
          borderWidth:1,
          height:getPercentageHeight(50),
        },
        rightArrow:{
            width:getPercentageWidth(18),
            height:getPercentageHeight(25),
            alignSelf:'flex-end',marginRight:getPercentageWidth(9)
        },
        measurementsStyles:{
          width:getPercentageWidth(37),
            height:getPercentageHeight(23),
            //alignSelf:'flex-start',
            marginLeft:getPercentageWidth(11)
        },
        button: {
            width: '100%',
            paddingVertical: getPercentageHeight(8),
            backgroundColor: COLOR.PRIMARY_COLOR,
            flexDirection: 'row',
            marginTop: getPercentageHeight(38),
            marginBottom: getPercentageHeight(10),
            height: getPercentageHeight(49)
          },
          buttonTitle: {
            fontSize: 22,
            fontWeight: '700',
            color: COLOR.WHITE,
            marginRight: getPercentageWidth(10),
          },
          colorHeading: {
            fontSize: 14,
            marginBottom:getPercentageHeight(9),
          },
          colorContainer: {
            //marginTop: getPercentageHeight(3),
            flexDirection: 'row',
            alignItems: 'center',
          },
          color: {
            width: getPercentageWidth(40),
            height: getPercentageHeight(40),
            marginRight: getPercentageWidth(8),
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          },
          colorName: {
            marginTop: getPercentageHeight(5),
            marginLeft: getPercentageWidth(10),
            fontSize: 6,
            fontWeight: '300',
          },
          checkStyles:{
              width:getPercentageWidth(16),
              height:getPercentageHeight(11)
          },
          selectColorsContainer:{
            flex:1, 
            flexDirection:'row', 
            borderColor:COLOR.MERCURY, 
            borderWidth:1,
            height:getPercentageHeight(50),
            paddingLeft:getPercentageWidth(10)
          },
          similarItemText:{
              fontSize:20,
              color:COLOR.TEXT_COLOR
          },
          arrowButtonImages:{
            width: getPercentageWidth(25),
            height:getPercentageHeight(25),
            marginLeft:getPercentageWidth(2),
            marginRight:getPercentageHeight(2),
          },
          separator: {
            width: '100%',
            height: getPercentageHeight(1),
            backgroundColor: COLOR.GRAY,
          },
          propertiesContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: getPercentageHeight(5)
          },
          checkoutButtonContainer: {
            marginVertical: getPercentageHeight(15),
            height: getPercentageHeight(48),
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: getPercentageWidth(10),
          },
          undoContainer: {
            height: getPercentageHeight(48),
            width: getPercentageWidth(50),
            marginTop: getPercentageHeight(7),
            borderRadius: 6,
            backgroundColor: COLOR.PROD_COLOR_2,
            justifyContent: 'center',
            alignItems: 'center',
          },
          undoText: {
            fontSize: 6,
            fontWeight: '300',
            marginTop: getPercentageHeight(5),
            color: COLOR.GRAY,
          },
          segmentContainer: {
            width: '100%',
            marginTop: getPercentageHeight(18),
            alignSelf: 'center' 
          },
          segmentItemStyle: {
            alignItems: 'flex-start',
          },
          segmentContentContainer: {
            width: '100%',
            alignSelf: 'center'
          },
          descriptionText: {
            fontSize: 10,
            marginTop: getPercentageHeight(18),
            lineHeight: getPercentageHeight(14),
            color:COLOR.LIGHT_TEXT_EMPORER
          },
          sizeContainer: {
            width: '100%',
            position: 'relative',
            zIndex: 20,
            alignSelf: 'center',
          },
          middleContainer: {
            width: '100%',
            alignSelf: 'center',
          },
          selectSizeContainer: {
            width: getPercentageWidth(100),
            marginTop: getPercentageHeight(19),
            flexDirection: 'row',
            alignItems: 'center',
          },
          selectedSize: {
            marginLeft: getPercentageWidth(15),
            color: COLOR.GRAY
          },
          writeReviewContainer:{
            marginTop:getPercentageHeight(45),
            marginBottom:getPercentageHeight(70)
          },
          writeReviewText:{
            color:COLOR.REVIEW_TEXT,
            fontSize:14,
            textDecorationLine:'underline'
          },
          flexOneCenter:{
            flex:1,
            justifyContent:'center',
          }
});
const measurementsStyles=StyleSheet.create({
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
export {styles, measurementsStyles};
