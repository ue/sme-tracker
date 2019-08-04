import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  informatinView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bottomView: {
    flex: 1,
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
    height: 100,
    width: '$deviceWidth',
    alignSelf: 'flex-end',
  },
  dailyPriceText: {
    fontSize: 40,
    marginTop: 70,
    fontWeight: 'bold',
  },
  mountlyPriceText: {
    fontSize: 25,
    marginTop: 30,
    fontWeight: 'bold',
  },
});
