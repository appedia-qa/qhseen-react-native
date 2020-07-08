import { StyleSheet } from 'react-native';

import {COLOR, width, height,} from '../../../constants';

const styles = StyleSheet.create({
  buttonStyles: {
    marginTop: 10,
    alignSelf: 'center',
    // position: "absolute",
  },
  viewStyle:{
    borderColor: COLOR.PRIMARY_COLOR,
    height: 20,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    position: "absolute",
    height: height * .05,
    width: width * .09,
    top : height * 0.24,
    left : width * 0.05,
  },
  viewStyle2:{
    height: 150,
    width: width * .77,
    padding: 8,
    bottom: 8,
  },
  textStyle:{
    fontSize: 30,
    fontWeight: '700',
    color:COLOR.WHITE
  },
  logo:{
    width: width * 0.232,
    height: 135,
    position: "absolute",
    top: height * 0.60,
    left: width * 0.085,
  },
  step1Image:{
    width: width,
    height: height,
  }
});

export default styles;
