import { StyleSheet } from 'react-native';

import { COLOR, width, height,} from '../../constants';

const styles = StyleSheet.create({
  buttonContainer: {
    width: width * 0.17866666666,
    height: width * 0.17866666666,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    top: height * 0.8,
    position:'absolute'
  },
});

export default styles;
