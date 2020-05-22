/*
 * Auth Action Types
 */
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  isLoggedIn: boolean;
  authToken: string;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  isLoggedIn: boolean;
  authToken: string;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  isLoggedIn: boolean;
  authToken: string;
}

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
  isLoggedIn: boolean;
  autToken: string;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
  isLoggedIn: boolean;
  autToken: string;
}

interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
  isLoggedIn: boolean;
  autToken: string;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;

/*
 * Auth Action Creators
 */
export function login(): any {
  return { type: LOGIN_REQUEST };
}

export function logout(): any {
  return { type: LOGOUT_REQUEST };
}
