import {
  STATUS_INIT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAIL,
  ACTIVITY_FAIL,
  ACTIVITY_REQUEST,
  SET_ACTIVITY,
} from '../../constants/actionTypes';

const initialState = {
  user: null,
  status: STATUS_INIT,
  error: null,
};

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case ACTIVITY_REQUEST:
      return {
        ...state,
        data: null,
        error: null,
        status: STATUS_REQUEST,
      };
    case ACTIVITY_FAIL:
      return {
        ...state,
        data: null,
        error: error,
        status: STATUS_FAIL,
      };
    case SET_ACTIVITY:
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
