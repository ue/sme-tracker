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
  quickTitle: {
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
    marginLeft: 5,
  },
  notArea: {
    paddingTop: 15,
    minHeight: 100,
    maxHeight: 170,
  },
  customerInput: {
    fontSize: 30,
    marginTop: 20,
    minWidth: '40%',
    maxWidth: '40%',
    borderWidth: 1,
    minWidth: '80%',
    fontSize: 16,
    minHeight: 50,
    borderRadius: 15,
    borderColor: '#cfcfcf',
    color: '#333',
    padding: 10,
  },
});
