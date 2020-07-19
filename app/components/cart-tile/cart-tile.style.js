import { StyleSheet } from 'react-native';
import {width, height, COLOR} from '../../constants';

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 1,
  },
  image: {
    width: width * 0.27,
    height: width * 0.27,
    borderRadius: 15,
  },
  imageContainer:{
  },
  productContainer:{
  },
  productNameText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLOR.PROFILE_BG,
  },
  designerNameText: {
    fontSize: 14,
    fontWeight: '300',
    color: COLOR.DESIGNER_LOC,
  },
  QRText:{
    fontSize: 18,
    fontWeight: '700',
    color: COLOR.QR,
  },
  icon: {
    width: 18,
    height: 20,
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  iconContainer: {
    flex:1,
  },
  secondContainer: {
    marginTop: 14,
    marginBottom: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex:2,
  },
  secondInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex:2,
  },
  firstInnerContainer: {
    marginTop: 14,
    marginBottom: 16,
    justifyContent:'space-around',
    marginLeft:11,
    flex:1,
  },
  counterContainer: {
    alignSelf: 'flex-end',
    width: width * 0.479,
    height: height * 0.041,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLOR.TEXT_LIGHT,
    flex: 1,
    marginRight: 16,
  },
  decrement: {
    borderRightColor: COLOR.TEXT_LIGHT,
    borderRightWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
  decrementText: {
    fontSize: 30, 
    alignSelf: 'center',
  },
  increment: {
    borderLeftColor: COLOR.TEXT_LIGHT,
    borderLeftWidth: 1,
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
  },
  incrementText: {
    fontSize: 30,
    alignSelf: 'center',
  },
  counterNumber: {
    fontSize: 30,
    alignSelf: 'center',
    padding: 20,
  },
  touchableContainer: {
    flexDirection: 'row',
  },
  noteText: {
    fontSize: 14,
    color: COLOR.PRIMARY_COLOR,
    fontWeight: '300',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },

});

export default styles;
