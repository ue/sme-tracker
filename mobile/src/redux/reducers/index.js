import { combineReducers } from 'redux';
import nav from './navigation.reducer';
import user from './user.reducer';
import activities from './activities.reducer';
import customers from './customers.reducer';
import store from './store.reducer';
import reports from './report.reducer';
import employees from './employees.reducer';

export default combineReducers({
  nav,
  user,
  activities,
  customers,
  store,
  reports,
  employees,
});
