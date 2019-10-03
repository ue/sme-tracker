import { useState } from 'react';
import { useSelector } from 'react-redux';

import { fetchCustomers, insertActivity } from '../services/firebaseService';

const InsertionContainer = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const storeId = useSelector(
    state => state.user.user && state.user.user.storeId,
  );
  const userId = useSelector(state => state.user.user && state.user.user.uid);
  const activityTypes = useSelector(
    state => (state.store.data && state.store.data.productTypes) || [],
  );

  const _fetchCustomers = text => {
    if (text) {
      fetchCustomers({ text, storeId }).then(result => setCustomers(result));
    } else {
      setCustomers([]);
    }
  };

  const _insertActivity = ({
    type,
    price,
    customerName,
    customerNote,
    customerId,
    callback,
  }) => {
    insertActivity({
      type,
      price,
      customerName,
      customerNote,
      customerId,
      storeId,
      userId,
    })
      .then(result => {
        callback();
      })
      .catch(err => {});
  };

  return (
    children &&
    children({
      fetchCustomers: _fetchCustomers,
      insertActivity: _insertActivity,
      customers,
      activityTypes,
    })
  );
};

export default InsertionContainer;
