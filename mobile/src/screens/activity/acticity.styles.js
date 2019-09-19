import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topView: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  informatinView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bottomView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemView: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 15,
    padding: 5,
    marginRight: 20,
  },
  chart: {
    height: deviceHeight / 10,
    width: deviceWidth,
    alignSelf: 'flex-end',
  },
  dailyPriceText: {
    fontSize: 40,
    marginTop: 50,
    fontWeight: 'bold',
  },
  mountlyPriceText: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
