import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import {
  fetchDailyReports,
  fetchMonthlyReports,
  fetchYearlyReports,
  fetchEmployeeDailyReports,
  fetchEmployeeMonthlyReports,
  fetchEmployeeYearlyReports,
} from '../redux/actions/report.action';

const ReportContainer = ({ children, isFocused }) => {
  const dispatch = useDispatch();

  const storeId = useSelector(
    state => state.user.data && state.user.data.storeId,
  );
  const userId = useSelector(state => state.user.data && state.user.data.uid);
  const userRole = useSelector(
    state => state.user.data && state.user.data.role,
  );
  const activityTypes = useSelector(
    state => (state.store.data && state.store.data.productTypes) || [],
  );
  const dailyReport = useSelector(state => state.reports.daily || []);
  const monthlyReport = useSelector(state => state.reports.monthly || []);
  const yearlyReport = useSelector(state => state.reports.yearly || []);

  useEffect(() => {
    if (userRole === 'admin') {
      dispatch(fetchDailyReports({ storeId }));
      dispatch(fetchMonthlyReports({ storeId }));
      dispatch(fetchYearlyReports({ storeId }));
    } else {
      dispatch(fetchEmployeeDailyReports({ storeId, userId }));
      dispatch(fetchEmployeeMonthlyReports({ storeId, userId }));
      dispatch(fetchEmployeeYearlyReports({ storeId, userId }));
    }
  }, [dispatch, storeId, userId, isFocused, userRole]);

  return (
    children &&
    children({
      dailyReport,
      monthlyReport,
      yearlyReport,
      activityTypes,
      userRole,
    })
  );
};

export default withNavigationFocus(ReportContainer);
