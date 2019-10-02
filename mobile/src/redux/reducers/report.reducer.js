import {
  STATUS_INIT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAIL,
  REPORT_REQUEST,
  REPORT_FAIL,
  SET_DAILY_REPORT,
  SET_MONTHLY_REPORT,
  SET_YEARLY_REPORT,
} from '../../constants/actionTypes';

const initialState = {
  daily: null,
  monthly: null,
  yearly: null,
  status: STATUS_INIT,
  error: null,
};

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case REPORT_REQUEST:
      return {
        ...state,
        error: null,
        status: STATUS_REQUEST,
      };
    case REPORT_FAIL:
      return {
        ...state,
        error: error,
        status: STATUS_FAIL,
      };
    case SET_DAILY_REPORT:
      return {
        ...state,
        daily: data,
        error: null,
        status: STATUS_SUCCESS,
      };
    case SET_MONTHLY_REPORT:
      return {
        ...state,
        monthly: data,
        error: null,
        status: STATUS_SUCCESS,
      };
    case SET_YEARLY_REPORT:
      return {
        ...state,
        yearly: data,
        error: null,
        status: STATUS_SUCCESS,
      };
    default:
      return state;
  }
};
