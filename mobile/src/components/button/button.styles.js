import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  buttonText: {
    letterSpacing: 0.7,
    fontSize: 20,
    color: '#FFFFFF',
  },
  button: {
    flex: 1,
    maxHeight: 50,
    minHeight: 45,
    height: 45,
    width: 200,
    elevation: 1,
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'rgba(21, 180, 241, 100)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderRadius: 25,
    shadowColor: '#ebebf2',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  disableButton: {
    backgroundColor: '#D3D3D3',
  },
  activityIndicator: {
    padding: 10,
  },
});
