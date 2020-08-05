import { StyleSheet } from 'react-native';
import { COLOR, width, height } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.BACK,
  },
  listContainer: {
    flex: 1,
    paddingTop: 16,
  },
  sliderContainer: {
    borderRadius: 7,
    width: width * 0.91,
    height: height * 0.318,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:16,
  },
  sliderCategory: {
    width: width * 0.91,
    height: height * 0.318,
    borderRadius: 7,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    //position: 'absolute',
    zIndex: -1,
  },
  paginationStyle: {
  },
  dotStyle: {
    backgroundColor: COLOR.PROFILE_BG,
    width: 14,
    height: 14,
    borderRadius: 14,
  },
  activeDotStyle: {
    backgroundColor: COLOR.PROFILE_BG,
    width: 14,
    height: 14,
    borderRadius: 14,
  },
  loadMoreContainer: {
    width: width * 0.9117,
    backgroundColor: COLOR.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 17,

  },
  loadmoreText: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 12,
    color: COLOR.BLACK,
  },
  iconLoadMoreAlign: {
    position: "absolute",
    alignSelf: 'flex-end',
    paddingRight: 14,
  },
  iconLoadMore: {
    width: width * 0.0163,
    height: width * 0.0195,
  }
});

export default styles;
