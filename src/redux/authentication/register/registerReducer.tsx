import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./registerActionTypes";

interface RegisterState {
  registrationSuccess: boolean;
  registerError: boolean;
}

type RegisterActions = 
  | { type: typeof REGISTER_SUCCESS }
  | { type: typeof REGISTER_FAILURE };

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
    default:
      return state;
  }
}

export default registerReducer;