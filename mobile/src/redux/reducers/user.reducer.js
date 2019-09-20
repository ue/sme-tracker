import {
  ADD_USER,
  STATUS_INIT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAIL,
  USER_REQUEST,
  USER_REQUEST_FAIL,
} from '../../constants/actionTypes';

const initialState = {
  user: null,
  status: STATUS_INIT,
  error: null,
};

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case USER_REQUEST:
      return {
        ...state,
        user: null,
        error: null,
        status: STATUS_REQUEST,
      };
    case USER_REQUEST_FAIL:
      return {
        ...state,
        user: null,
        error: error,
        status: STATUS_FAIL,
      };
    case ADD_USER:
      return {
        ...state,
        user: data,
        error: null,
        status: STATUS_SUCCESS,
      };
    default:
      return state;
  }
};
