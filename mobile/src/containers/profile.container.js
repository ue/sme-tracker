import { withNavigation } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../redux/actions/user.action';

import ROUTES from '../constants/routeNames';

const ProfileContainer = ({ children, navigation }) => {
  const dispatch = useDispatch();

  const userRole = useSelector(
    state => state.user.data && state.user.data.role,
  );

  const _handleOnPreesEmployeesButton = () => {
    navigation.navigate(ROUTES.SCREENS.EMPLOYEES);
  };

  const _logout = () => {
    dispatch(logout());
  };

  return (
    children &&
    children({
      handleOnPreesEmployeesButton: _handleOnPreesEmployeesButton,
      userRole,
      logout: _logout,
    })
  );
};

export default withNavigation(ProfileContainer);
