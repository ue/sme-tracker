import {
  ADD_USER,
  STATUS_INIT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAIL,
  USER_REQUEST,
  USER_REQUEST_FAIL,
  USER_LOGOUT,
} from '../../constants/actionTypes';

const initialState = {
  data: null,
  status: STATUS_INIT,
  error: null,
};

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case USER_REQUEST:
      return {
        ...state,
        data: null,
        error: null,
        status: STATUS_REQUEST,
      };
    case USER_REQUEST_FAIL:
      return {
        ...state,
        data: null,
        error: error,
        status: STATUS_FAIL,
      };
    case ADD_USER:
      return {
        ...state,
        data: data,
        error: null,
        status: STATUS_SUCCESS,
      };
    case USER_LOGOUT:
      return {
        ...state,
        data: null,
        error: null,
        status: STATUS_SUCCESS,
      };
    default:
      return state;
  }
};
