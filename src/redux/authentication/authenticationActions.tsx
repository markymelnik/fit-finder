import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./authenticationActionTypes";

export const loginSuccess = (token: String, user: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
      user
    }
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  }
}