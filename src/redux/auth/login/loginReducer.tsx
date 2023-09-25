import { LOGIN_SUCCESS, LOGIN_FAILURE, RESET_LOGIN_ERROR, LOGOUT_SUCCESS } from "./loginActionTypes";
import { UserAccount } from "../../../types/types";

interface LoginState {
  isLoggedIn: boolean;
  loginError: boolean;
  token: string | null;
  userAccount: UserAccount | null;
}

type LoginActions =
  | {
      type: typeof LOGIN_SUCCESS;
      payload: { token: string; userAccount: UserAccount };
    }
  | { type: typeof LOGIN_FAILURE }
  | { type: typeof RESET_LOGIN_ERROR }
  | { type: typeof LOGOUT_SUCCESS };

const initialState: LoginState = {
  isLoggedIn: false,
  loginError: false,
  token: null,
  userAccount: null,
}

const loginReducer = (state = initialState, action: LoginActions) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loginError: false,
        token: action.payload.token,
        userAccount: action.payload.userAccount
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        loginError: true,
        token: null,
        userAccount: null
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        loginError: false,
        token: null,
        userAccount: null
      };
    case RESET_LOGIN_ERROR:
      return {
        ...state,
        loginError: false
      }
    default:
      return state;
  }
}

export default loginReducer;