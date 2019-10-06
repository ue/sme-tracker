import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120 / 3,
  },
  avatarWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#cbcbcb',
  },
  bodyWrapper: {
    flex: 1.2,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 20,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  indicatorText: {
    color: '#60a0ff',
    fontWeight: 'bold',
    fontSize: 11,
  },
  iconButton: {
    flex: 0.4,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    margin: 15,
  },
  bottomWrapper: {
    marginBottom: 35,
  },
});
