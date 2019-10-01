import { combineReducers } from 'redux';
import nav from './navigation.reducer';
import user from './user.reducer';
import activities from './activities.reducer';
import customers from './customers.reducer';

export default combineReducers({
  nav,
  user,
  activities,
  customers,
});
