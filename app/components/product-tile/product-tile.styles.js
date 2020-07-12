import { StyleSheet } from 'react-native';
import {width, height, COLOR} from '../../constants';

const styles = StyleSheet.create({
  card: {
    width: width * 0.43,
  },
  container: {
    width: '100%',
    padding: 2,
    borderRadius: 5,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    aspectRatio: 0.96,
  },
  productName: {
    fontSize: 15,
    fontWeight: '500',
    padding: 5,
    textAlign: 'center',
    color: COLOR.BLACK_TEXT,
  },
  price: {
    fontSize: 13,
    fontWeight: '700',
    color: COLOR.BROWN_TEXT,
    marginBottom: 4,
    marginHorizontal: 5,
  },
});

export default styles;
