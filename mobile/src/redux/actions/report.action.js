import firestore from '@react-native-firebase/firestore';
import {
  REPORT_REQUEST,
  REPORT_FAIL,
  SET_DAILY_REPORT,
  SET_MONTHLY_REPORT,
  SET_YEARLY_REPORT,
} from '../../constants/actionTypes';

export const fetchDailyReports = ({ storeId }) => async dispatch => {
  dispatch({ type: REPORT_REQUEST });
  const dailyActivities = [];

  try {
    const beginningDate = new Date();
    beginningDate.setHours(0, 0, 0, 0);

    const dailyQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('activities')
      .where('createdAt', '>=', beginningDate)
      .get();

    await Promise.all(
      dailyQuery.docs.map(async item => {
        const activityDaily = item.data();
        const employee = await activityDaily.employee.get();

        activityDaily.id = item.id;
        activityDaily.employee = employee.data();

        dailyActivities.push(activityDaily);
      }),
    );

    let dailyReport = orderByEmployee(dailyActivities, 'price');
    dailyReport =
      Object.keys(dailyReport).length > 0
        ? Object.keys(dailyReport).map(item => ({
            name: item,
            price: dailyReport[item],
          }))
        : [];

    dispatch({ type: SET_DAILY_REPORT, data: dailyReport });
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const fetchMonthlyReports = ({ storeId }) => async dispatch => {
  dispatch({ type: REPORT_REQUEST });
  const monthlyActivities = [];

  try {
    const beginningDate = new Date();
    beginningDate.setHours(0, 0, 0, 0);

    const firstDayOfMonth = new Date(
      beginningDate.getFullYear(),
      beginningDate.getMonth(),
      1,
    );

    const monthlyQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('activities')
      .where('createdAt', '>=', firstDayOfMonth)
      .get();

    await Promise.all(
      monthlyQuery.docs.map(async item => {
        const activityMonthly = item.data();
        const employee = await activityMonthly.employee.get();

        activityMonthly.id = item.id;
        activityMonthly.employee = employee.data();

        monthlyActivities.push(activityMonthly);
      }),
    );

    let monthlyReport = orderByEmployee(monthlyActivities, 'price');
    monthlyReport =
      Object.keys(monthlyReport).length > 0
        ? Object.keys(monthlyReport).map(item => ({
            name: item,
            price: monthlyReport[item],
          }))
        : [];

    dispatch({ type: SET_MONTHLY_REPORT, data: monthlyReport });
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const fetchYearlyReports = ({ storeId }) => async dispatch => {
  dispatch({ type: REPORT_REQUEST });
  const yearlyActivities = [];

  try {
    const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1);

    const yearlyQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('activities')
      .where('createdAt', '>=', firstDayOfYear)
      .get();

    await Promise.all(
      yearlyQuery.docs.map(async item => {
        const activityYearly = item.data();
        const employee = await activityYearly.employee.get();

        activityYearly.id = item.id;
        activityYearly.employee = employee.data();

        yearlyActivities.push(activityYearly);
      }),
    );

    let yearlyReport = orderByEmployee(yearlyActivities, 'price');

    yearlyReport =
      Object.keys(yearlyReport).length > 0
        ? Object.keys(yearlyReport).map(item => ({
            name: item,
            price: yearlyReport[item],
          }))
        : [];

    dispatch({ type: SET_YEARLY_REPORT, data: yearlyReport });
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const fetchEmployeeDailyReports = ({
  storeId,
  userId,
}) => async dispatch => {
  dispatch({ type: REPORT_REQUEST });
  const dailyActivities = [];

  try {
    const employeeRef = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('employees')
      .doc(userId);

    const beginningDate = new Date();
    beginningDate.setHours(0, 0, 0, 0);

    const dailyQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('activities')
      .where('employee', '==', employeeRef)
      .where('createdAt', '>=', beginningDate)
      .get();

    await Promise.all(
      dailyQuery.docs.map(async item => {
        const activityDaily = item.data();

        activityDaily.id = item.id;

        dailyActivities.push(activityDaily);
      }),
    );

    let dailyReport = orderByType(dailyActivities, 'price');
    dailyReport =
      Object.keys(dailyReport).length > 0
        ? Object.keys(dailyReport).map(item => ({
            name: item,
            price: dailyReport[item],
          }))
        : [];

    dispatch({ type: SET_DAILY_REPORT, data: dailyReport });
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const fetchEmployeeMonthlyReports = ({
  storeId,
  userId,
}) => async dispatch => {
  dispatch({ type: REPORT_REQUEST });
  const monthlyActivities = [];

  try {
    const employeeRef = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('employees')
      .doc(userId);

    const beginningDate = new Date();
    beginningDate.setHours(0, 0, 0, 0);

    const firstDayOfMonth = new Date(
      beginningDate.getFullYear(),
      beginningDate.getMonth(),
      1,
    );

    const monthlyQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('activities')
      .where('employee', '==', employeeRef)
      .where('createdAt', '>=', firstDayOfMonth)
      .get();

    await Promise.all(
      monthlyQuery.docs.map(async item => {
        const activityMonthly = item.data();

        activityMonthly.id = item.id;

        monthlyActivities.push(activityMonthly);
      }),
    );

    let monthlyReport = orderByType(monthlyActivities, 'price');
    monthlyReport =
      Object.keys(monthlyReport).length > 0
        ? Object.keys(monthlyReport).map(item => ({
            name: item,
            price: monthlyReport[item],
          }))
        : [];

    dispatch({ type: SET_MONTHLY_REPORT, data: monthlyReport });
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const fetchEmployeeYearlyReports = ({
  storeId,
  userId,
}) => async dispatch => {
  dispatch({ type: REPORT_REQUEST });
  const yearlyActivities = [];

  try {
    const employeeRef = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('employees')
      .doc(userId);

    const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1);

    const yearlyQuery = await firestore()
      .collection('stores')
      .doc(storeId)
      .collection('activities')
      .where('employee', '==', employeeRef)
      .where('createdAt', '>=', firstDayOfYear)
      .get();

    await Promise.all(
      yearlyQuery.docs.map(async item => {
        const activityYearly = item.data();

        activityYearly.id = item.id;

        yearlyActivities.push(activityYearly);
      }),
    );

    let yearlyReport = orderByType(yearlyActivities, 'price');

    yearlyReport =
      Object.keys(yearlyReport).length > 0
        ? Object.keys(yearlyReport).map(item => ({
            name: item,
            price: yearlyReport[item],
          }))
        : [];

    dispatch({ type: SET_YEARLY_REPORT, data: yearlyReport });
  } catch (e) {
    dispatch(fail(e.message));
  }
};

export const fail = error => ({
  type: REPORT_FAIL,
  error,
});

const orderByType = (array, key) =>
  array.reduce((result, activity) => {
    if (activity.type in result) {
      result[activity.type] =
        result[activity.type] + parseInt(activity[key], 10);
    } else {
      result[activity.type] = parseInt(activity[key], 10);
    }
    return result;
  }, {});

const orderByEmployee = (array, key) =>
  array.reduce((result, activity) => {
    if (activity.employee.name in result) {
      result[activity.employee.name] =
        result[activity.employee.name] + parseInt(activity[key], 10);
    } else {
      result[activity.employee.name] = parseInt(activity[key], 10);
    }
    return result;
  }, {});
