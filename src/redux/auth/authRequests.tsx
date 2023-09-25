import Axios from "axios";

import { loginSuccess, loginFailure, logoutSuccess } from "./login/loginActions";
import { signupFailure, signupSuccess } from "./signup/signupActions";
import { sleep } from "./sleep";
import { setIsAuthFormShown } from "../slices/authFormSlice";
import { setShowCheckmark } from "../slices/checkmarkSuccessSlice";
import { startLoading, stopLoading } from "../slices/loadingSlice";
import { setIsSuccessfulSignupShown } from "../slices/successfulSignup";
import { AppDispatch } from "../store";

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

      await Axios.post(`${import.meta.env.VITE_FFA_BE_URL}/auth/register`, signupCredentials);
  
      dispatch(signupSuccess());

      console.log("Account created successfully")

      dispatch(stopLoading());

      dispatch(setShowCheckmark(true));

      await sleep(1500);

      dispatch(setShowCheckmark(false));

      dispatch(setIsSuccessfulSignupShown(true));

    } catch (err) {
      console.error('Error registering new account', err);
      dispatch(signupFailure());
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

        dispatch(setIsAuthFormShown(false));

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