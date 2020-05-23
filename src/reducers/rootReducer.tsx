import { combineReducers } from 'redux';
import Auth from './authReducer';
import Settings from './settingsReducer';
import Users from './usersReducer';

const rootReducer = combineReducers({
  Auth,
  Settings,
  Users,
});

export default rootReducer;
