import {
  STATUS_INIT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAIL,
  STORE_REQUEST,
  STORE_FAIL,
  SET_STORE,
} from '../../constants/actionTypes';

const initialState = {
  data: null,
  status: STATUS_INIT,
  error: null,
};

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case STORE_REQUEST:
      return {
        ...state,
        data: null,
        error: null,
        status: STATUS_REQUEST,
      };
    case STORE_FAIL:
      return {
        ...state,
        data: null,
        error: error,
        status: STATUS_FAIL,
      };
    case SET_STORE:
      return {
        ...state,
        data,
        error: null,
        status: STATUS_SUCCESS,
      };
    default:
      return state;
  }
};
