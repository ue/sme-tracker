import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './config/routes';
import NavigationService from './services/navigationService';

export default () => (
  <Provider store={store}>
    <App
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);
