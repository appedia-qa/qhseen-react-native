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
    paddingHorizontal: 23,
    paddingTop: 23,
    marginTop: height * 0.38
  },
  designerListContent: {
    paddingBottom: 23,
    alignItems: 'center',
  },
  designerCard: {
    width: width * 0.41,
    borderRadius: 9,
    paddingBottom: 10,
    alignItems: 'center',
  },
  designerCover: {
    width: width * 0.41,
    height: undefined,
    aspectRatio: 156/86,
    borderRadius: 9,
  },
  designerImageContainer: {
    position: 'absolute',
    top: '25%',
    padding: 3,
    backgroundColor: COLOR.WHITE,
    borderRadius: width * 0.16,
  },
  designerImage: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.16,
    
  },
  designerName: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 28,
    color: COLOR.BROWN_TEXT,
    marginHorizontal: 9,
  },
  designerMessage: {
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'center',
    marginHorizontal: 9,
  },
});

export default styles;
