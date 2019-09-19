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
    width: deviceWidth / 1.4,
    fontSize: 10,
    padding: 5,
    height: 50,
    flex: 1,
    color: '#ff1954',
    paddingTop: 10,
    textAlign: 'center',
  },
});
