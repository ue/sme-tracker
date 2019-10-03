import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import { fetchCustomers } from '../redux/actions/customers.action';

const CustomerContainer = ({ children, isFocused }) => {
  const dispatch = useDispatch();

  const storeId = useSelector(
    state => state.user.user && state.user.user.storeId,
  );
  const customers = useSelector(state => state.customers.data || []);

  useEffect(() => {
    dispatch(fetchCustomers({ storeId }));
  }, [dispatch, storeId, isFocused]);

  return children && children({ customers });
};

export default withNavigationFocus(CustomerContainer);
