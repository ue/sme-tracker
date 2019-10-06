import {
  STATUS_INIT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAIL,
  EMPLOYEE_REQUEST,
  EMPLOYEE_FAIL,
  SET_EMPLOYEE,
  ADD_EMPLOYEE,
} from '../../constants/actionTypes';

const initialState = {
  data: [],
  status: STATUS_INIT,
  error: null,
};

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case EMPLOYEE_REQUEST:
      return {
        ...state,
        error: null,
        status: STATUS_REQUEST,
      };
    case EMPLOYEE_FAIL:
      return {
        ...state,
        data: [],
        error: error,
        status: STATUS_FAIL,
      };
    case SET_EMPLOYEE:
      return {
        ...state,
        data,
        error: null,
        status: STATUS_SUCCESS,
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        data: [...state.data, data],
        error: null,
        status: STATUS_SUCCESS,
      };
    default:
      return state;
  }
};
