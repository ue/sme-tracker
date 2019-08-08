import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  inputText: {
    alignSelf: 'flex-start',
    letterSpacing: 0.7,
    fontSize: 12,
    color: '#797979',
  },
  invalidInputText: {
    color: '#FF4D00',
  },
  input: {
    height: 40,
    borderColor: '#d8d8d8',
    letterSpacing: 0.7,
    borderBottomWidth: 1,
  },
  invalidInput: {
    borderColor: '#FF4D00',
  },
  showPasswordIcon: {
    alignSelf: 'flex-end',
    width: 50,
    height: 30,
    position: 'relative',
    textAlign: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: -30,
    zIndex: 999,
  },
  formInput: {
    width: '$deviceWidth / 1.4',
    marginTop: 10,
  },
});
