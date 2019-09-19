import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  form: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: deviceHeight / 11,
  },
});
