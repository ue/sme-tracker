import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../components/iconButton/iconButton.view';

import ROUTES from '../constants/routeNames';

import Dashboard from '../screens/dashboard.screen';
import Exchange from '../screens/exchange/exchange.screen';
import Activity from '../screens/activity/activity.screen';

export default createBottomTabNavigator(
  {
    [ROUTES.TABBAR.DAILY]: {
      screen: Activity,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="calendar-text" color={tintColor} size={26} />,
      }),
    },
    [ROUTES.TABBAR.SUMMARY]: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="chart-line" color={tintColor} size={26} />,
      }),
    },
    [ROUTES.TABBAR.ADD_ITEM]: {
      screen: Exchange,
      navigationOptions: () => ({
        tabBarIcon: () => <IconButton noButton size={25} iconName="plus" />,
      }),
    },
    [ROUTES.TABBAR.RING]: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="bell-outline" color={tintColor} size={26} />,
      }),
    },
    [ROUTES.TABBAR.ACCOUNT]: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-outline" color={tintColor} size={26} />
          // chart-bar
        ),
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
