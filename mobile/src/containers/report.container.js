import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import {
  fetchEmployeeDailyReports,
  fetchEmployeeMonthlyReports,
  fetchEmployeeYearlyReports,
} from '../redux/actions/report.action';

const ReportContainer = ({ children, isFocused }) => {
  const dispatch = useDispatch();

  const storeId = useSelector(
    state => state.user.user && state.user.user.storeId,
  );
  const userId = useSelector(state => state.user.user && state.user.user.uid);
  const activityTypes = useSelector(
    state => (state.store.data && state.store.data.productTypes) || [],
  );
  const dailyReport = useSelector(state => state.reports.daily || []);
  const monthlyReport = useSelector(state => state.reports.monthly || []);
  const yearlyReport = useSelector(state => state.reports.yearly || []);

  useEffect(() => {
    dispatch(fetchEmployeeDailyReports({ storeId, userId }));
    dispatch(fetchEmployeeMonthlyReports({ storeId, userId }));
    dispatch(fetchEmployeeYearlyReports({ storeId, userId }));
  }, [dispatch, storeId, userId, isFocused]);

  return (
    children &&
    children({ dailyReport, monthlyReport, yearlyReport, activityTypes })
  );
};

export default withNavigationFocus(ReportContainer);
