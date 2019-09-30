import firestore from '@react-native-firebase/firestore';
import {
  ACTIVITY_REQUEST,
  ACTIVITY_FAIL,
  SET_ACTIVITY,
} from '../../constants/actionTypes';

export const fetchEmployeeDailyActivities = ({
  storeId,
  userId,
}) => async dispatch => {
  dispatch({ type: ACTIVITY_REQUEST });
  const activities = [];

  try {
    const employeeRef = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('employees')
      .doc(userId);

    const beginningDate = new Date();
    beginningDate.setHours(0, 0, 0, 0);

    let activityQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('activities')
      .where('employee', '==', employeeRef)
      .where('createdAt', '>=', beginningDate)
      .get();

    await Promise.all(
      await activityQuery.docs.map(async item => {
        const activity = item.data();

        const customer = await activity.customer.get();
        const employee = await activity.employee.get();

        activity.customer = customer.data();
        activity.employee = employee.data();
        activity.id = item.id;

        activities.push(activity);
      }),
    );
    dispatch(setActivity(activities));
  } catch (e) {
    console.log('e :', e);
    dispatch(fail(e.message));
  }
};

export const setActivity = data => ({
  type: SET_ACTIVITY,
  data,
});

export const fail = error => ({
  type: ACTIVITY_FAIL,
  error,
});
