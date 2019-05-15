import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ROUTES from '../constants/routeNames';

import Dashboard from '../screens/dashboard.screen';

export default createBottomTabNavigator(
  {
    [ROUTES.TABBAR.DAILY]: {
      screen: Dashboard,
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
    /* eslint-disable react-native/no-inline-styles */
    /* eslint-disable react-native/no-color-literals */
    [ROUTES.TABBAR.ADD_ITEM]: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <View
            style={{
              backgroundColor: '#4A98F7',
              borderRadius: 15,
              padding: 5,
            }}
          >
            <Icon name="plus" color="white" size={25} />
          </View>
        ),
      }),
    },
    /* eslint-enable react-native/no-inline-styles */
    /* eslint-enable react-native/no-color-literals */
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
