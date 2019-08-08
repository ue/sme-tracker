import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorText: {
    letterSpacing: 0.7,
    width: '$deviceWidth / 1.4',
    fontSize: 10,
    padding: 5,
    height: 50,
    flex: 1,
    color: '#ff1954',
    paddingTop: 10,
    textAlign: 'center',
  },
});
