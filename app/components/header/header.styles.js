import { StyleSheet } from 'react-native';
import {width, height, COLOR} from '../../constants';

const styles = StyleSheet.create({
  safeArea: {
    width,
  },
  absoluteStyles: {
    backgroundColor: COLOR.WHITE,
    position: 'absolute',
    borderBottomColor: COLOR.LIGHT_GRAY,
    borderBottomWidth: 0.5,
    zIndex: 10,
  },
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 14.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shadowStyles: {
    backgroundColor: COLOR.WHITE,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowColor: COLOR.SHADOW_GRAY,
    elevation: 5,
  },
  drawer: {
    width: 43,
    height: 29.5,
  },
  searchContainer: {
    height: 30,
    backgroundColor: COLOR.White,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 20,
    color: COLOR.BLACK,
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.5,
  },
  searchIcon: {
    width: 29,
    height: 29,
  },
  notify: {
    width: 21,
    height: 25,
    marginLeft: 18,
    alignSelf: 'center',
  },
  notificationTextView: {
    width: 17,
    height: 17,
    borderRadius: 17,
    backgroundColor: COLOR.PROFILE_BG,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    left: 6,
    bottom: 4,
  },
  notificationText:{
    fontSize: 10,
    fontWeight: '600',
    color: COLOR.WHITE,
  },
});

export default styles;
