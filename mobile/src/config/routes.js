import React from 'react';
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ROUTES from '../constants/routeNames';

import IconButton from '../components/iconButton/iconButton.view';
import Exchange from '../screens/exchange/exchange.screen';
import Activity from '../screens/activity/activity.screen';
import Report from '../screens/report/report.screen';
import Splash from '../screens/splash/splash.screen';
import Login from '../screens/login/login.screen';

const Auth = createBottomTabNavigator(
  {
    [ROUTES.TABBAR.DAILY]: {
      screen: Activity,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="calendar-text" color={tintColor} size={26} />,
      }),
    },
    [ROUTES.TABBAR.ADD_ITEM]: {
      screen: Exchange,
      navigationOptions: () => ({
        tabBarIcon: () => <IconButton noButton size={25} iconName="plus" />,
      }),
    },
    [ROUTES.TABBAR.SUMMARY]: {
      screen: Report,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="chart-line" color={tintColor} size={26} />,
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#2E3C4D',
      inactiveTintColor: '#8F9FB3',
    },
  },
);

const RootNavigator = createSwitchNavigator(
  {
    [ROUTES.NAVIGATOR.AUTH]: Auth,
    [ROUTES.SCREENS.SPLASH]: Splash,
    [ROUTES.NAVIGATOR.NO_AUTH]: Login,
  },
  {
    initialRouteName: ROUTES.SCREENS.SPLASH,
  },
);

export default createAppContainer(RootNavigator);
