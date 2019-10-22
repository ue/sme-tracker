import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorText: {
    letterSpacing: 0.7,
    fontSize: 10,
    color: '#ff1954',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
