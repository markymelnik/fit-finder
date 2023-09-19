import { UserAccount } from "../../types/types";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, RESET_LOGIN_ERROR } from "./authenticationActionTypes";

interface UserAccountState {
  isLoggedIn: boolean;
  loginError: boolean;
  token: string | null;
  userAccount: UserAccount | null;
}

type UserAccountActions =
  | {
      type: typeof LOGIN_SUCCESS;
      payload: { token: string; userAccount: UserAccount };
    }
  | { type: typeof LOGIN_FAILURE }
  | { type: typeof LOGOUT_SUCCESS }
  | { type: typeof RESET_LOGIN_ERROR };

const initialState: UserAccountState = {
  isLoggedIn: false,
  loginError: false,
  token: null,
  userAccount: null,
}

const userAccountReducer = (state = initialState, action: UserAccountActions) => {
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

export default userAccountReducer;