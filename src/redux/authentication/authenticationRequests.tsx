import Axios from "axios";
import { loginSuccess, loginFailure, logoutSuccess } from "./login/loginActions";
import { AppDispatch } from "../store";
import { setIsLoginFormShown } from "../slices/loginFormSlice";
import { sleep } from "./sleep";
import { startLoading, stopLoading } from "../slices/loadingSlice";
import { registerFailure, registerSuccess } from "./register/registerActions";
import { setShowCheckmark } from "../slices/checkmarkSuccessSlice";
import { useNavigate } from "react-router-dom";

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

      const response = await Axios.post(`${import.meta.env.VITE_FFA_BE_URL}/auth/register`, signupCredentials);
      console.log(response);
  
      dispatch(registerSuccess());

      console.log("Account created successfully")

      dispatch(stopLoading());

      dispatch(setShowCheckmark(true));

      await sleep(1500);

      dispatch(setShowCheckmark(false));

      dispatch(setIsLoginFormShown(false));

    } catch (err) {
      console.error('Error registering new account', err);
      dispatch(registerFailure());
      dispatch(stopLoading());
    }
  }
}

const loginAccount = (loginCredentials: LoginAccountCredentials, dispatch: AppDispatch) => {

  return async () => {
    try {
      dispatch(startLoading());
      
      const response = await Axios.post(`${import.meta.env.VITE_FFA_BE_URL}/auth/login`, loginCredentials);
      const token = response.data.jwt;
      const userAccount = response.data.userAccount;

      await sleep(1000);
      
      if (!token || !userAccount) {
        dispatch(loginFailure());

        dispatch(stopLoading());

        console.log("Account does not exist; login unsuccessful")

      } else {
        dispatch(loginSuccess(token, userAccount));

        console.log("Account exists; login successful")

        dispatch(stopLoading());

        dispatch(setShowCheckmark(true));

        await sleep(1000);

        dispatch(setShowCheckmark(false));

        dispatch(setIsLoginFormShown(false));

      }
  
    } catch (err) {
      console.error('Error logging into account', err);
      dispatch(loginFailure());
      dispatch(stopLoading());
    }
  }
}

const logoutAccount = (dispatch: AppDispatch) => async() => {
  try {
    await Axios.post(`${import.meta.env.VITE_FFA_BE_URL}/auth/logout`);

    await sleep(1000);

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