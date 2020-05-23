import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, UserActionTypes } from '../actions/userActions';

interface UserState {
  response: string;
}

const initialState = {
  response: '',
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return { ...state, response: '' };
    case SIGN_UP_SUCCESS:
      return { ...state, response: 'response' };
    case SIGN_UP_FAILURE:
      return { ...state, response: 'error' };
    default:
      return state;
  }
};

export default userReducer;
