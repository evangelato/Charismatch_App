/*
 * Auth Action Types
 */
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
  type: typeof LOGIN;
  isLoggedIn: boolean;
  authToken: string;
}

interface LogoutAction {
  type: typeof LOGOUT;
  isLoggedIn: boolean;
  autToken: string;
}

export type AuthActionTypes = LoginAction | LogoutAction;

/*
 * Auth Action Creators
 */
export function login(): any {
  return { type: LOGIN };
}

export function logout(): any {
  return { type: LOGOUT };
}
