import { withNavigation } from 'react-navigation';

import ROUTES from '../constants/routeNames';

const ProfileContainer = ({ children, navigation }) => {
  const _handleOnPreesEmployeesButton = () => {
    navigation.navigate(ROUTES.SCREENS.EMPLOYEES);
  };
  return (
    children &&
    children({ handleOnPreesEmployeesButton: _handleOnPreesEmployeesButton })
  );
};

export default withNavigation(ProfileContainer);
