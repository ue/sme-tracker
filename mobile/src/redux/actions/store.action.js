import firestore from '@react-native-firebase/firestore';
import {
  STORE_REQUEST,
  STORE_FAIL,
  SET_STORE,
} from '../../constants/actionTypes';

export const fetchStoreData = ({ storeId }) => async dispatch => {
  dispatch({ type: STORE_REQUEST });

  try {
    const storeQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .get();

    dispatch(setStore(storeQuery.data()));
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const setStore = data => ({
  type: SET_STORE,
  data,
});

export const fail = error => ({
  type: STORE_FAIL,
  error,
});
