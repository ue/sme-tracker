import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
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
});
