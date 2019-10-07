import firestore from '@react-native-firebase/firestore';
import {
  CUSTOMER_REQUEST,
  CUSTOMER_FAIL,
  SET_CUSTOMER,
  ADD_CUSTOMER,
} from '../../constants/actionTypes';

export const fetchCustomers = ({ storeId }) => async dispatch => {
  dispatch({ type: CUSTOMER_REQUEST });
  const customers = [];

  try {
    const customerQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('customers')
      .get();

    await Promise.all(
      await customerQuery.docs.map(async item => {
        const customer = await item.data();
        const activityQuery = await firestore()
          .collection('stores')
          .doc(storeId)
          .collection('activities')
          .where('customer', '==', item.ref)
          .get();
        const activities = [];
        await activityQuery.docs.map(async i => {
          const activity = await i.data();
          const employee = await activity.employee.get();
          activity.employee = employee.data();
          activity.id = i.id;
          activities.push(activity);
        });

        customer.id = item.id;
        customer.activities = activities;
        customers.push(customer);
      }),
    );
    dispatch(setCustomer(customers));
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const addCustomer = ({ customerName, storeId }) => async dispatch => {
  dispatch({ type: CUSTOMER_REQUEST });

  try {
    const customer = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('customers')
      .add({
        name: customerName.toLowerCase(),
      });
    dispatch({
      type: ADD_CUSTOMER,
      data: { name: customerName, id: customer.id },
    });
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const setCustomer = data => ({
  type: SET_CUSTOMER,
  data,
});

export const fail = error => ({
  type: CUSTOMER_FAIL,
  error,
});
