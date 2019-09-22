import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ROUTES from '../constants/routeNames';

import IconButton from '../components/iconButton/iconButton.view';
import Exchange from '../screens/exchange/exchange.screen';
import Activity from '../screens/activity/activity.screen';
import Report from '../screens/report/report.screen';
import Splash from '../screens/splash/splash.screen';
import Login from '../screens/login/login.screen';
import Profile from '../screens/profile/profile.screen';
import Customer from '../screens/customers/customers.screen';
import CustomerDetails from '../screens/customerDetails/customerDetails.screen';
import NewCustomer from '../screens/newCustomers/newCustomers.screen';

const Auth = createBottomTabNavigator(
  {
    [ROUTES.TABBAR.DAILY]: {
      screen: Activity,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="calendar-blank" color={tintColor} size={26} />
        ),
      }),
    },
    [ROUTES.TABBAR.CUSTOMERS]: {
      screen: Customer,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-group-outline" color={tintColor} size={26} />
        ),
      }),
    },
    // [ROUTES.TABBAR.ADD_ITEM]: {
    //   screen: Exchange,
    //   navigationOptions: () => ({
    //     tabBarIcon: () => <IconButton noButton size={25} iconName="plus" />,
    //   }),
    // },
    [ROUTES.TABBAR.SUMMARY]: {
      screen: Report,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="chart-line" color={tintColor} size={26} />
        ),
      }),
    },
    [ROUTES.TABBAR.PROFILE]: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account" color={tintColor} size={26} />
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

const stackNavigation = createStackNavigator(
  {
    [ROUTES.SCREENS.ADD_ITEM]: {
      screen: Exchange,
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.NEW_CUSTOMER]: {
      screen: NewCustomer,
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.CUSTOMER_DETAILS]: {
      screen: CustomerDetails,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    headerMode: 'none',
  },
);

const RootNavigator = createSwitchNavigator(
  {
    stackNavigation,
    [ROUTES.NAVIGATOR.AUTH]: Auth,
    [ROUTES.SCREENS.SPLASH]: Splash,
    [ROUTES.NAVIGATOR.NO_AUTH]: Login,
  },
  {
    initialRouteName: ROUTES.SCREENS.SPLASH,
  },
);

export default createAppContainer(RootNavigator);
