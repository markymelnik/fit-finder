import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./registerActionTypes";

export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
}

export interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
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
