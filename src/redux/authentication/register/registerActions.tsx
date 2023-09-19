import { REGISTER_SUCCESS, REGISTER_FAILURE, RESET_REGISTER_ERROR } from "./registerActionTypes";

export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
}

export interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
}

export interface ResetRegisterErrorAction {
  type: typeof RESET_REGISTER_ERROR;
}

export const registerSuccess = (): RegisterSuccessAction => {
  return {
    type: REGISTER_SUCCESS
  }
}

export const registerFailure = (): RegisterFailureAction => {
  return {
    type: REGISTER_FAILURE
  }
}

export const resetRegisterError = (): ResetRegisterErrorAction => {
  return {
    type: RESET_REGISTER_ERROR
  }
}