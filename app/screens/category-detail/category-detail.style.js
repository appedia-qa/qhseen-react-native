import { StyleSheet } from 'react-native';
import { COLOR, width, height } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
  subHeaderContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 17,
  },
  buttonAlign: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    ...StyleSheet.absoluteFillObject,
  },
  arrowBackground: {
    width: width * 0.0668,
    height: width * 0.0668,
    backgroundColor: COLOR.BACK,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: width * 0.0374,
    height: width * 0.0370,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.WHITE,
    alignSelf:'center',
    //marginLeft:width*0.248,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLOR.BACK,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 16,
    marginTop: 14,
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
