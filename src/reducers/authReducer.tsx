import { LOGIN, LOGOUT, AuthActionTypes } from '../actions/authActions';

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
    case LOGIN:
      return { ...state, isLoggedIn: true, authToken: 'token' };
    case LOGOUT:
      return { ...state, isLoggedIn: false, authToken: '' };
    default:
      return state;
  }
};

export default authReducer;
