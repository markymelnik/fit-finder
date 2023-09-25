import { SIGNUP_SUCCESS, SIGNUP_FAILURE, RESET_SIGNUP_ERROR } from "./signupActionTypes";

export interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
}

export interface SignupFailureAction {
  type: typeof SIGNUP_FAILURE;
}

export interface ResetSignupErrorAction {
  type: typeof RESET_SIGNUP_ERROR;
}

export const signupSuccess = (): SignupSuccessAction => {
  return {
    type: SIGNUP_SUCCESS
  }
}

export const signupFailure = (): SignupFailureAction => {
  return {
    type: SIGNUP_FAILURE
  }
}

export const resetSignupError = (): ResetSignupErrorAction => {
  return {
    type: RESET_SIGNUP_ERROR
  }
}