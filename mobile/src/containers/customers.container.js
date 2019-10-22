import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import { fetchCustomers } from '../redux/actions/customers.action';

const CustomerContainer = ({ children, isFocused }) => {
  const dispatch = useDispatch();

  const storeId = useSelector(
    state => state.user.data && state.user.data.storeId,
  );
  const customers = useSelector(state => state.customers.data && state.customers.data.sort(sorter) || []);

  const sorter = (a, b) => {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  }

  useEffect(() => {
    dispatch(fetchCustomers({ storeId }));
  }, [dispatch, storeId, isFocused]);

  return children && children({ customers });
};

export default withNavigationFocus(CustomerContainer);
