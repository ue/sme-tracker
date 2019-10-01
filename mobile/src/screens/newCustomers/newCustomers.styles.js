import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
  quickTitle: {
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
    marginLeft: 20,
  },
  customerInput: {
    marginTop: 20,
    marginLeft: 20,
    maxWidth: '40%',
    borderWidth: 1,
    minWidth: '90%',
    fontSize: 16,
    minHeight: 50,
    borderRadius: 15,
    borderColor: '#cfcfcf',
    color: '#333',
    padding: 10,
  },
  notArea: {
    paddingTop: 15,
    minHeight: 100,
    maxHeight: 170,
  },
  bottomView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
