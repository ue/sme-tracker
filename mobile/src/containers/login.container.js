import { useDispatch } from 'react-redux';

import { loginWithEmail } from '../redux/actions/user.action';

const SplashContainer = ({ children }) => {
  const dispatch = useDispatch();

  const login = ({ email, password }) => {
    dispatch(loginWithEmail({ email: `${email}@bubi.com`, password }));
  };
  return children && children({ login });
};

export default SplashContainer;
