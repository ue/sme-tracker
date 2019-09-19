import React from 'react';
import { Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import store from './redux/store';
import App from './config/routes';

EStyleSheet.build({
  $deviceHeight: Dimensions.get('window').height,
  $deviceWidth: Dimensions.get('window').width,
});

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
