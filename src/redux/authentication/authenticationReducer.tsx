import { UserAccount } from "../../types/types";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "./authenticationActionTypes";

interface UserAccountState {
  isLoggedIn: boolean;
  token: string | null;
  userAccount: UserAccount | null;
}

type UserAccountActions =
  | {
      type: typeof LOGIN_SUCCESS;
      payload: { token: string; userAccount: UserAccount };
    }
  | { type: typeof LOGIN_FAILURE }
  | { type: typeof LOGOUT_SUCCESS };

const initialState: UserAccountState = {
  isLoggedIn: false,
  token: null,
  userAccount: null
}

const userAccountReducer = (state = initialState, action: UserAccountActions) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        userAccount: action.payload.userAccount
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        userAccount: null
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        userAccount: null
      };
    default:
      return state;
  }
}

export default userAccountReducer;