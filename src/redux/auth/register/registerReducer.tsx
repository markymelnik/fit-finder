import { REGISTER_SUCCESS, REGISTER_FAILURE, RESET_REGISTER_ERROR } from "./registerActionTypes";

interface RegisterState {
  registrationSuccess: boolean;
  registerError: boolean;
}

type RegisterActions = 
  | { type: typeof REGISTER_SUCCESS }
  | { type: typeof REGISTER_FAILURE }
  | { type: typeof RESET_REGISTER_ERROR };

const initialState: RegisterState = {
  registrationSuccess: false,
  registerError: false
}

const registerReducer = (state = initialState, action: RegisterActions) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registrationSuccess: true,
        registerError: false,
      };
    case REGISTER_FAILURE: 
      return {
        ...state,
        registrationSuccess: false,
        registerError: true,
      };
    case RESET_REGISTER_ERROR:
      return {
        ...state,
        registerError: false,
      }
    default:
      return state;
  }
}

export default registerReducer;