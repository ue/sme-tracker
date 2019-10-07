import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import {
  fetchEmployeeDailyActivities,
  fetchAllDailyActivities,
} from '../redux/actions/activities.action';

const ActivityContainer = ({ children, isFocused }) => {
  const dispatch = useDispatch();

  const storeId = useSelector(
    state => state.user.data && state.user.data.storeId,
  );
  const userId = useSelector(state => state.user.data && state.user.data.uid);
  const userRole = useSelector(
    state => state.user.data && state.user.data.role,
  );
  const activities = useSelector(state => state.activities.data || []);

  useEffect(() => {
    if (userRole === 'admin') {
      dispatch(fetchAllDailyActivities({ storeId }));
    } else {
      dispatch(fetchEmployeeDailyActivities({ storeId, userId }));
    }
  }, [dispatch, storeId, userId, isFocused, userRole]);

  return children && children({ activities, userRole });
};

export default withNavigationFocus(ActivityContainer);
