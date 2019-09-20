import auth from '@react-native-firebase/auth';
import {
  ADD_USER,
  USER_REQUEST,
  USER_REQUEST_FAIL,
} from '../../constants/actionTypes';

export const addUserData = user => ({
  type: ADD_USER,
  data: user,
});

export const failUserRequest = error => ({
  type: USER_REQUEST_FAIL,
  error,
});

export const loginWithEmail = ({ email, password }) => async dispatch => {
  dispatch({ type: USER_REQUEST });

  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    dispatch(addUserData(user));
  } catch (e) {
    dispatch(failUserRequest(e.message));
  }
};
