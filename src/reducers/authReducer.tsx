import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  AuthActionTypes,
} from '../actions/authActions';

interface AuthState {
  isLoggedIn: boolean;
  authToken: string;
}

const initialState = {
  isLoggedIn: false,
  authToken: '',
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, authToken: '' };
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, authToken: 'token' }; // TODO: this is a temp value
    case LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, authToken: '' }; // TODO: this is a temp value
    case LOGOUT_REQUEST:
      return { ...state, isLoggedIn: false, authToken: '' };
    case LOGOUT_SUCCESS:
      return { ...state, isLoggedIn: false, authToken: '' };
    case LOGOUT_FAILURE:
      return { ...state, isLoggedIn: false, authToken: '' };
    default:
      return state;
  }
};

export default authReducer;
