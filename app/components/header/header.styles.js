import { StyleSheet } from 'react-native';
import {width, height, COLOR} from '../../constants';

const styles = StyleSheet.create({
  safeArea: {
    width,
  },
  transparentStyles: {
    backgroundColor: COLOR.transparent,
    position: 'absolute',
    zIndex: 10,
  },
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowStyles: {
    backgroundColor: COLOR.WHITE,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowColor: COLOR.SHADOW_GRAY,
    elevation: 5,
  },
  searchContainer: {
    height: 30,
    width: width * 0.80,
    backgroundColor: COLOR.MERCURY,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 12,
    flex: 1,
    color: COLOR.LIGHT_TEXT_EMPORER,
    marginHorizontal: 10,
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginLeft: 8,
  },
});

export default styles;
