import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
    minWidth: '40%',
    maxWidth: '40%',
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
  },
  picker: {
    width: deviceWidth / 2,
  },
});
