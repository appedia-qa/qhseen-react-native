import { StyleSheet } from 'react-native';
import { width, height, COLOR } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catalogueScrollView: {
    flex: 1,
  },
  carousalContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  productsContainer: {
    flex: 1,
    backgroundColor: COLOR.CONTAINER_SERENADE,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default styles;
