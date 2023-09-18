import Axios from "axios";
import { loginSuccess, loginFailure, logoutSuccess } from "./authenticationActions";
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
        const token = response.data.jwt;
        const userAccount = response.data.userAccount;
        
        if (!token || !userAccount) {
          dispatch(loginFailure());
          console.log("Account does not exist; login unsuccessful")
        } else {
          dispatch(loginSuccess(token, userAccount));
          console.log("Account exists; login successful")
        }
    
      } catch (err) {
        console.error('Error logging into account', err);
        dispatch(loginFailure());
      }
    }
}

const logoutAccount = (dispatch: AppDispatch) => async() => {
  try {
    const response = await Axios.post(`${import.meta.env.VITE_FFA_BE_URL}/auth/logout`);
    console.log(response.data);
    dispatch(logoutSuccess());
    console.log("Logout successful");
  } catch (err) {
    console.error("Error logging out account.")
  }
}

export {
  registerNewAccount,
  loginAccount,
  logoutAccount
}