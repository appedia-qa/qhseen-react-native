import { StyleSheet } from 'react-native';
import { width, height, COLOR } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.TEXT_CAMELOT,
  },
  headingContainer: {
    marginTop: 23,
    marginBottom: 11,
    alignItems: 'center',
  },
  cartScrollView: {
    flex: 1,
    width: width,
  },
  cardTileContainer:{
    alignItems:'center',
    padding:5
  }
});

export default styles;
