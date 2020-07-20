import { StyleSheet } from 'react-native';
import { COLOR, width, height } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  sliderContainer: {
    width: width,
    height: height * 0.49,
    position: 'absolute',
  },
  sliderContentContainer: {
    width: width,
    aspectRatio: 375/401,
    padding: 16,
  },
  sliderDesigner: {
    width,
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  sliderContent: {
    marginTop: height * 0.20,
  },
  sliderTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.BROWN_TEXT,
  },
  sliderDetails: {
    fontSize: 12,
    fontWeight: '600',
    width: '40%',
  },
  paginationStyle: {
    // top: height * 0.32
    bottom: height * 0.13,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 23,
    marginTop: height * 0.38
  },
});

export default styles;
