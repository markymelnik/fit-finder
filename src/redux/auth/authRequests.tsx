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

      const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupCredentials)
      });

      if (!response.ok) {
        return new Error('Error registering new account')
      }
  
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
      
      const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginCredentials)
      });

      if (!response.ok) {
        return new Error('Error logging into account')
      }

      const responseData = await response.json();

      const token = responseData.jwt;
      const userAccount = responseData.userAccount;

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

const logoutAccount = (dispatch: AppDispatch) => async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_FFA_BE_URL}/auth/logout`, {
      method: 'POST',
    });

    if (!response.ok) {
      return new Error('Error logging out account')
    }

    await sleep(1000);

    dispatch(logoutSuccess());
    console.log('Logout successful');

  } catch (err) {
    console.error('Error logging out account');
  }
};

export {
  registerNewAccount,
  loginAccount,
  logoutAccount
}