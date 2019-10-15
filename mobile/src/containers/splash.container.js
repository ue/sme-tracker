import { useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContext } from 'react-navigation';
import { useDispatch } from 'react-redux';

import { addUserData } from '../redux/actions/user.action';

import ROUTES from '../constants/routeNames';

const SplashContainer = ({ children }) => {
  const navigation = useContext(NavigationContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        dispatch(addUserData({ user: currentUser }));
        navigation.navigate(ROUTES.NAVIGATOR.HOME);
      } else {
        navigation.navigate(ROUTES.NAVIGATOR.NO_AUTH);
      }
    });
    return () => unsubscribe();
  });

  return children && children();
};

export default SplashContainer;
