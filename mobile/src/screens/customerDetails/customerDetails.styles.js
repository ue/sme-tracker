import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  listItemWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: 20,
  },
  employeeName: {
    fontWeight: '500',
  },
  listItem: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  searchWrapper:{
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
    maxWidth: '90%',
  },
  quickTitle: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
    marginLeft: 20,
  },
  employeeWrapper: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    padding: 3,
    color: '#333'
  },
  backIcon: {
    marginLeft: 10,
    width: 50,
  },
});
