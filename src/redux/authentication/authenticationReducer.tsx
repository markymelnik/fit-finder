import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./authenticationActionTypes";

const initialState = {
  isLoggedIn: false,
  token: null as String | null,
  details: null as any | null
}

const userAccountReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        details: action.payload.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        etails: null
      };
    default:
      return state;
  }
}

export default userAccountReducer;