import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  ADD_USER,
  USER_REQUEST,
  USER_REQUEST_FAIL,
  USER_LOGOUT,
} from '../../constants/actionTypes';
import ROUTES from '../../constants/routeNames';
import NavigationService from '../../services/navigationService';

import { fetchStoreData } from './store.action';

export const addUserData = user => async dispatch => {
  dispatch({ type: USER_REQUEST });
  try {
    console.log('user :', user);
    const documentSnapshot = await firestore()
      .collection('users')
      .doc(user.user.uid)
      .get();

    const userData = documentSnapshot.data();

    dispatch(fetchStoreData(userData));

    dispatch({
      type: ADD_USER,
      data: { ...user.user.toJSON(), ...userData },
    });
  } catch (e) {
    dispatch(failUserRequest(e.message));
  }
};

export const failUserRequest = error => ({
  type: USER_REQUEST_FAIL,
  error,
});

export const registerWithEmail = ({ email, password }) => async dispatch => {
  dispatch({ type: USER_REQUEST });

  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    dispatch(addUserData(user));
    NavigationService.navigate(ROUTES.NAVIGATOR.HOME);
  } catch (e) {
    dispatch(failUserRequest(e.message));
  }
};

export const loginWithEmail = ({ email, password }) => async dispatch => {
  dispatch({ type: USER_REQUEST });

  try {
    const user = await auth().signInWithEmailAndPassword(email, password);
    dispatch(addUserData(user));
    NavigationService.navigate(ROUTES.NAVIGATOR.HOME);
  } catch (e) {
    dispatch(failUserRequest(e.message));
  }
};

export const logout = () => async dispatch => {
  dispatch({ type: USER_REQUEST });

  try {
    await auth().signOut();
    dispatch({ type: USER_LOGOUT });
    NavigationService.navigate(ROUTES.NAVIGATOR.NO_AUTH);
  } catch (e) {
    dispatch(failUserRequest(e.message));
  }
};
