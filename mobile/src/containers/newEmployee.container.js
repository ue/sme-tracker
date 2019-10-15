import { useDispatch, useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { addEmployee } from '../redux/actions/employees.action';

const NewEmployeeContainer = ({ children, navigation }) => {
  const dispatch = useDispatch();

  const storeId = useSelector(
    state => state.user.data && state.user.data.storeId,
  );

  const _addEmployee = ({ employeeName, username, password }) => {
    dispatch(addEmployee({ employeeName, username, password, storeId }));
    navigation.goBack();
  };

  return children && children({ addEmployee: _addEmployee });
};

export default withNavigation(NewEmployeeContainer);
