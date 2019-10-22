import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCustomers, insertActivity } from '../services/firebaseService';

import {
  fetchEmployeeDailyActivities,
  fetchAllDailyActivities,
} from '../redux/actions/activities.action';

const InsertionContainer = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const dispatch = useDispatch();
  const storeId = useSelector(
    state => state.user.data && state.user.data.storeId,
  );
  const userId = useSelector(state => state.user.data && state.user.data.uid);
  const activityTypes = useSelector(
    state => (state.store.data && state.store.data.productTypes) || [],
  );
  const userRole = useSelector(
    state => state.user.data && state.user.data.role,
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
      .then(() => {
        Alert.alert('Eklendi');

        if (userRole === 'admin') {
          dispatch(fetchAllDailyActivities({ storeId }));
        } else {
          dispatch(fetchEmployeeDailyActivities({ storeId, userId }));
        }

        callback();
      })
      .catch(err => Alert.alert('Hata'));
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
