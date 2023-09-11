import Axios from "axios";
import { loginSuccess, loginFailure } from "./authenticationActions";
import { AppDispatch } from "../store";

type SignupAccountCredentials = {
  username: string;
  password: string;
}

type LoginAccountCredentials = {
  username: string;
  password: string;
}

const registerNewAccount = (signupCredentials: SignupAccountCredentials) => async () => {
  try {
    const response = await Axios.post(`${import.meta.env.VITE_FFA_BE_URL}/auth/register`, signupCredentials)
    console.log(response);
  } catch (err) {
    console.error('Error registering new account', err);
  }
}

const loginAccount = (loginCredentials: LoginAccountCredentials, dispatch: AppDispatch) => {

    return async () => {
      try {
        const response = await Axios.post(`${import.meta.env.VITE_FFA_BE_URL}/auth/login`, loginCredentials)
        console.log(response);
        const token = response.data.jwt;
        const user = response.data.user;
        
        if (!token) {
          dispatch(loginFailure());
          console.log("Account does not exist; login unsuccessful")
        } else {
          dispatch(loginSuccess(token, user));
          console.log("Account exists; login successful")
        }
    
      } catch (err) {
        console.error('Error logging into account', err);
        dispatch(loginFailure());
      }
    }
}

export {
  registerNewAccount,
  loginAccount
}