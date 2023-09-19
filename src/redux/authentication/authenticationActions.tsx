import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, RESET_LOGIN_ERROR } from "./authenticationActionTypes";
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

export interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export interface ResetLoginErrorAction {
  type: typeof RESET_LOGIN_ERROR;
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
};

export const logoutSuccess = (): LogoutSuccessAction => {
  return {
    type: LOGOUT_SUCCESS
  }
};

export const resetLoginError = (): ResetLoginErrorAction => {
  return {
    type: RESET_LOGIN_ERROR
  }
};