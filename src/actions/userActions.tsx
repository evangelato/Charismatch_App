/*
 * User Action Types
 */
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

interface SignUpRequestAction {
  type: typeof SIGN_UP_REQUEST;
}

interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
}

interface SignUpFailureAction {
  type: typeof SIGN_UP_FAILURE;
}

export type UserActionTypes = SignUpRequestAction | SignUpSuccessAction | SignUpFailureAction;

/*
 * User Action Creators
 */
export function signUp(): any {
  return { type: SIGN_UP_REQUEST };
}
