import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
  EMPLOYEE_REQUEST,
  EMPLOYEE_FAIL,
  SET_EMPLOYEE,
  ADD_EMPLOYEE,
} from '../../constants/actionTypes';

export const fetchEmployees = ({ storeId }) => async dispatch => {
  dispatch({ type: EMPLOYEE_REQUEST });
  const employees = [];

  try {
    const employeeQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('employees')
      .get();

    await Promise.all(
      await employeeQuery.docs.map(async item => {
        const employee = item.data();

        employee.id = item.id;

        employees.push(employee);
      }),
    );
    dispatch(setEmployee(employees));
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const addEmployee = ({
  employeeName,
  username,
  password,
  storeId,
}) => async dispatch => {
  dispatch({ type: EMPLOYEE_REQUEST });

  try {
    const user = await auth().createUserWithEmailAndPassword(
      `${username.toLowerCase()}@bubi.com`,
      password,
    );
    await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('employees')
      .doc(user.user.uid)
      .set({
        name: employeeName.toLowerCase(),
      });
    await firestore()
      .collection('users')
      .doc(user.user.uid)
      .set({
        role: 'employee',
        storeId: storeId,
      });
    dispatch({
      type: ADD_EMPLOYEE,
      data: { name: employeeName, id: user.user.uid },
    });
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const setEmployee = data => ({
  type: SET_EMPLOYEE,
  data,
});

export const fail = error => ({
  type: EMPLOYEE_FAIL,
  error,
});
