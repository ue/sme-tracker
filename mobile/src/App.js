import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import store from './redux/store';
import Routes from './config/routes';

const ReduxNavigation = createAppContainer(Routes);

export default () => (
  <Provider store={store}>
    <ReduxNavigation />
  </Provider>
);
