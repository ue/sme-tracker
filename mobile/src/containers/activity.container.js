import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import { fetchEmployeeDailyActivities } from '../redux/actions/activities.action';

const ActivityContainer = ({ children, isFocused }) => {
  const dispatch = useDispatch();

  const storeId = useSelector(
    state => state.user.user && state.user.user.storeId,
  );
  const userId = useSelector(state => state.user.user && state.user.user.uid);
  const activities = useSelector(state => state.activities.data || []);

  useEffect(() => {
    dispatch(fetchEmployeeDailyActivities({ storeId, userId }));
  }, [dispatch, storeId, userId, isFocused]);

  return children && children({ activities });
};

export default withNavigationFocus(ActivityContainer);
