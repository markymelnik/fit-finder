import Axios from "axios";
import { loginSuccess, loginFailure, logoutSuccess } from "./login/loginActions";
import { AppDispatch } from "../store";
import { setIsLoginFormShown } from "../slices/loginFormSlice";
import { sleep } from "./sleep";
import { startLoading, stopLoading } from "../slices/loadingSlice";
import { registerFailure, registerSuccess } from "./register/registerActions";

type SignupAccountCredentials = {
  username: string;
  password: string;
}

type LoginAccountCredentials = {
  username: string;
  password: string;
}

const registerNewAccount = (signupCredentials: SignupAccountCredentials, dispatch: AppDispatch) => {

  return async () => {
    try {
      dispatch(startLoading());

      await sleep(1000);
      const response = await Axios.post(`http://localhost:8080/auth/register`, signupCredentials);

      console.log(response);
  
      console.log("Account created successfully")
      dispatch(registerSuccess());
    } catch (err) {
      console.error('Error registering new account', err);
      dispatch(registerFailure());
    } finally {
      dispatch(stopLoading());
    }
  }
  
}

const loginAccount = (loginCredentials: LoginAccountCredentials, dispatch: AppDispatch) => {

  return async () => {
    try {
      dispatch(startLoading());
      
      const response = await Axios.post(`http://localhost:8080/auth/login`, loginCredentials);
      const token = response.data.jwt;
      const userAccount = response.data.userAccount;

      await sleep(1000);
      
      if (!token || !userAccount) {
        dispatch(loginFailure());
        console.log("Account does not exist; login unsuccessful")
      } else {
        dispatch(loginSuccess(token, userAccount));
        dispatch(setIsLoginFormShown(false));
        console.log("Account exists; login successful")
      }
  
    } catch (err) {
      console.error('Error logging into account', err);
      dispatch(loginFailure());
    } finally {
      dispatch(stopLoading());
    }
  }
}

const logoutAccount = (dispatch: AppDispatch) => async() => {
  try {
    await Axios.post(`http://localhost:8080/auth/logout`);
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