import { combineReducers } from 'redux';
import Auth from './authReducer';
import Settings from './settingsReducer';

const rootReducer = combineReducers({
  Auth,
  Settings,
});

export default rootReducer;
