import { combineReducers } from 'redux';
import authReducer from './authSlice';
import employeeReducer from './employeeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
});

export default rootReducer;
