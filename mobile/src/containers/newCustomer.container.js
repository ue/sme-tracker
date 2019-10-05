import { useDispatch, useSelector } from 'react-redux';

import { addCustomer } from '../redux/actions/customers.action';

const NewCustomerContainer = ({ children }) => {
  const dispatch = useDispatch();

  const storeId = useSelector(
    state => state.user.data && state.user.data.storeId,
  );

  const _addCustomer = ({ customerName }) => {
    dispatch(addCustomer({ customerName, storeId }));
  };

  return children && children({ addCustomer: _addCustomer });
};

export default NewCustomerContainer;
