/*
 * Auth Action Types
 */
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

interface LoginAction {
  type: typeof LOGIN_REQUEST;
  isLoggedIn: boolean;
  authToken: string;
}

interface LogoutAction {
  type: typeof LOGOUT_REQUEST;
  isLoggedIn: boolean;
  autToken: string;
}

export type AuthActionTypes = LoginAction | LogoutAction;

/*
 * Auth Action Creators
 */
export function login(): any {
  return { type: LOGIN_REQUEST };
}

export function logout(): any {
  return { type: LOGOUT_REQUEST };
}
