import { StyleSheet } from 'react-native';

import {COLOR, width, height,} from '../../../constants';

const styles = StyleSheet.create({
  screen: {
    flex:1,
    justifyContent: 'center',
  },
  buttonStyles: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.13,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    bottom: height * 0.06,
    position:'absolute',
  },
  logoOuterStyle:{
    height: 183.32,
    width: 128.19,
    borderColor: COLOR.PRIMARY_COLOR,
    backgroundColor: COLOR.LOGO_INSIDE_COLOR,
    borderWidth:2,
    borderRadius:60,
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoInnerStyle:{
    height: 70,
    width: 43,
    borderColor: COLOR.PRIMARY_COLOR,
    borderWidth:2,
    borderRadius:67,
    marginTop: 36,
  },
  headingStyle:{
    fontSize: 20,
    fontWeight: '700',
    color:  COLOR.PRIMARY_COLOR,
    letterSpacing:5,
    marginTop: 10,
  },
  subHeadingStyle:{
    fontSize: 5,
    fontWeight: '700',
    color:  COLOR.PRIMARY_COLOR,
    letterSpacing:3,
    top: 8,
  },
  backGroundImage:{
    width: width,
    height: height,
    position: 'absolute',
    zIndex: -10,
  }
});

export default styles;
