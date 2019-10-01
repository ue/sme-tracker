import {
  STATUS_INIT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAIL,
  CUSTOMER_REQUEST,
  CUSTOMER_FAIL,
  SET_CUSTOMER,
  ADD_CUSTOMER,
} from '../../constants/actionTypes';

const initialState = {
  data: [],
  status: STATUS_INIT,
  error: null,
};

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case CUSTOMER_REQUEST:
      return {
        ...state,
        data: [],
        error: null,
        status: STATUS_REQUEST,
      };
    case CUSTOMER_FAIL:
      return {
        ...state,
        data: [],
        error: error,
        status: STATUS_FAIL,
      };
    case SET_CUSTOMER:
      return {
        ...state,
        data,
        error: null,
        status: STATUS_SUCCESS,
      };
    case ADD_CUSTOMER:
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
