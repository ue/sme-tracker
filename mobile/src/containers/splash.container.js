import { useContext, useEffect } from 'react';
import { NavigationContext } from 'react-navigation';

import ROUTES from '../constants/routeNames';

const SplashContainer = ({ children }) => {
  const navigation = useContext(NavigationContext);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ROUTES.NAVIGATOR.AUTH);
    }, 1000);
  });

  return children && children();
};

export default SplashContainer;
