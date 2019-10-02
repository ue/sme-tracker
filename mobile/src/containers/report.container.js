import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEmployeeReports } from '../redux/actions/report.action';

const ReportContainer = ({ children }) => {
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
    dispatch(fetchEmployeeReports({ storeId, userId }));
  }, [dispatch, storeId, userId]);

  return (
    children &&
    children({ dailyReport, monthlyReport, yearlyReport, activityTypes })
  );
};

export default ReportContainer;
