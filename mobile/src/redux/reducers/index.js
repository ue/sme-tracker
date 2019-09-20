import { combineReducers } from 'redux';
import nav from './navigation.reducer';
import user from './user.reducer';

export default combineReducers({
  nav,
  user,
});
