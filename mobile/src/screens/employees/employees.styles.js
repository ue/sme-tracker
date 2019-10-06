import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    paddingLeft: 25,
    color: '#8e9fb4',
    fontSize: 17,
    borderRadius: 25,
    shadowColor: '#8e9fb4',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  listItemWrapper: {
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
  searchWrapper: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
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
  addEmployeesWrapper: {
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
  },
});
