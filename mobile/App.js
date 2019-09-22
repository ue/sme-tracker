import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { useScreens } from 'react-native-screens';
import NavigationService from './src/services/navigationService';

useScreens();

import App from './src/config/routes';

import store from './src/redux/store';

export default () => {
  return (
    <Provider store={store}>
      <App
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};
