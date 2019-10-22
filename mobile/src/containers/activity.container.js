import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import {
  fetchEmployeeDailyActivities,
  fetchAllDailyActivities,
} from '../redux/actions/activities.action';

const ActivityContainer = ({ children, isFocused }) => {
  const activities = useSelector(state => state.activities.data || []);
  const activitiesStatus = useSelector(state => state.activities.status || []);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading ] = useState(true);
  const [isEmpty, setIsEmpty ] = useState(false);
  const storeId = useSelector(
    state => state.user.data && state.user.data.storeId,
  );
  const userId = useSelector(state => state.user.data && state.user.data.uid);
  const userRole = useSelector(
    state => state.user.data && state.user.data.role,
  );

  useEffect(() => {
    if (userRole === 'admin') {
      dispatch(fetchAllDailyActivities({ storeId }));
    } else {
      dispatch(fetchEmployeeDailyActivities({ storeId, userId }));
    }
  }, [userRole]);

  useEffect(() => {
    if (activitiesStatus === 'success' && activities) {
      setIsLoading(false);
      setIsEmpty(activities.length === 0);
    }
  }, [activitiesStatus, activities]);

  return children && children({
    activities,
    userRole,
    isLoading,
    isEmpty: isEmpty,
  });
};

export default withNavigationFocus(ActivityContainer);
