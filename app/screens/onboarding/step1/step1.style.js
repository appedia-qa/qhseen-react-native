import { StyleSheet } from 'react-native';

import {COLOR, width, height,} from '../../../constants';

const styles = StyleSheet.create({
  buttonStyles: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    bottom: height * 0.06,
    position:'absolute',
  },
  logoOuterStyle:{
    backgroundColor: COLOR.LOGO_INSIDE_COLOR,
    borderColor: COLOR.PRIMARY_COLOR,
    height: 20,
    borderWidth:2,
    borderRadius:60,
    position: "absolute",
    height: 183.32,
    width: 128.19,
    top : height * 0.39,
    left : width * 0.32,
    alignItems: 'center',
    // bottom: height * 0.386
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
  }
});

export default styles;
