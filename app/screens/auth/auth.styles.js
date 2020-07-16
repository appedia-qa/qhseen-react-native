import { StyleSheet } from 'react-native';
import { COLOR } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  authTypeContainer: {
    width: '100%',
    marginTop: 52,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  authItemText: {
    fontSize: 18,
    fontWeight: '600',
  },
  highlighter: {
    width: '98%',
    marginHorizontal: '2%',
    height: 4,
    marginTop: 1,
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
  selectedAuthBar: {
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
});

export default styles;
