import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginWithEmail } from '../redux/actions/user.action';

const SplashContainer = ({ children }) => {
  const [isChanged, setIsChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error)

  const login = ({ email, password }) => {
    setIsChanged(true);
    setIsLoading(true);
    dispatch(loginWithEmail({ email: `${email}@bubi.com`, password }));
  };

  useEffect(() => {
    if (error) {
      setIsChanged(false);
      setIsLoading(false);
    }
  }, [error]);

  return children && children({ login, error, isLoading });
};

export default SplashContainer;
