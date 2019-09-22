import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    paddingLeft: 25,
    color: '#8e9fb4',
    fontSize: 17,
    shadowColor: 'red',
    borderRadius: 25,
    shadowColor: '#8e9fb4',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  listItemWrapper: {
    flex: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: 20,
  },
  listItem: {
    height: 43,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  searchWrapper:{
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 15,
    padding: 5,
    marginRight: 20,
  },
  listItemText: {
    fontSize: 16,
    color: '#000',
  },
  addCustomerWrapper: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTitle: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: '400',
  },
  quickTitle: {
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
    marginLeft: 40,
  }
});
