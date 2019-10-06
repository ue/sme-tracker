import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEmployees } from '../redux/actions/employees.action';

const EmployeesContainer = ({ children }) => {
  const dispatch = useDispatch();

  const storeId = useSelector(
    state => state.user.data && state.user.data.storeId,
  );
  const employees = useSelector(state => state.employees.data || []);

  useEffect(() => {
    dispatch(fetchEmployees({ storeId }));
  }, [dispatch, storeId]);

  return children && children({ employees });
};

export default EmployeesContainer;
