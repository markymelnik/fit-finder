import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./authenticationActionTypes";
import { UserAccount } from "../../types/types";

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    userAccount: UserAccount;
  }
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
}

export const loginSuccess = (token: string, userAccount: UserAccount): LoginSuccessAction => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
      userAccount
    }
  };
};

export const loginFailure = (): LoginFailureAction => {
  return {
    type: LOGIN_FAILURE
  }
}