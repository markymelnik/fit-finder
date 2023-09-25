import { SIGNUP_SUCCESS, SIGNUP_FAILURE, RESET_SIGNUP_ERROR } from "./signupActionTypes";

interface SignupState {
  signupSuccess: boolean;
  signupError: boolean;
}

type SignupActions = 
  | { type: typeof SIGNUP_SUCCESS }
  | { type: typeof SIGNUP_FAILURE }
  | { type: typeof RESET_SIGNUP_ERROR };

const initialState: SignupState = {
  signupSuccess: false,
  signupError: false
}

const signupReducer = (state = initialState, action: SignupActions) => {
  switch(action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupSuccess: true,
        signupError: false,
      };
    case SIGNUP_FAILURE: 
      return {
        ...state,
        signupSuccess: false,
        signupError: true,
      };
    case RESET_SIGNUP_ERROR:
      return {
        ...state,
        signupError: false,
      }
    default:
      return state;
  }
}

export default signupReducer;