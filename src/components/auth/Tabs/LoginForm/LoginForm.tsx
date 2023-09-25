import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Ring } from '@uiball/loaders';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import PasswordHideIcon from '../../../../assets/icons/password/password-hide.png';
import PasswordShowIcon from '../../../../assets/icons/password/password-show.png';
import { fetchFavoritedFacilities } from '../../../../redux/apiRequests';
import AuthCheckmarkSVG from '../../../../redux/auth/AuthCheckmarkSVG';
import { loginAccount } from '../../../../redux/auth/authRequests';
import { resetLoginError } from '../../../../redux/auth/login/loginActions';
import { AppDispatch, RootState } from '../../../../redux/store';
import WarningSVG from '../SignupForm/PasswordRequirements/WarningSVG';
import './_login-form.scss';

const Login = () => {

  const dispatch = useDispatch<AppDispatch>();
  
  const isLoading = useSelector((state: RootState) => state.loading === 1);
  const loginError = useSelector((state: RootState) => state.login.loginError);
  const showCheckmark = useSelector((state: RootState) => state.checkmarkSuccess.showCheckmark);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  const loginCredentials = {
    "username": loginEmail,
    "password": loginPassword
  }

  const userAccountId = useSelector((state: RootState) => state.login.userAccount?.id);

  useEffect(() => {
    if (userAccountId) {
      dispatch(fetchFavoritedFacilities(userAccountId));
    }
  }, [userAccountId]);

  const handleLoginEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetLoginError());
    setLoginEmail(event.target.value);
  }

  const handleLoginPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetLoginError());
    setLoginPassword(event.target.value);
  }

  const handleSubmitButtonClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loginEmail && loginPassword) {
      loginAccount(loginCredentials, dispatch)()
        .then(() => {
          setLoginEmail('');
          setLoginPassword('');
        })
        .catch(() => {
          console.error("unsuccessful login");
        })
    }
  }

  return (
    <div className='login-container'>
      <div className='login-form-descriptor'>Login to fitfinder</div>
      <form id='login-form' className='login-form' onSubmit={(event => handleSubmitButtonClick(event))}>
        <div className='form-field'>
          <div className='enter-information'>
            <div className={`input-login-email ${loginError ? 'input-error' : ''}`}>
              <input
                type='text'
                id='login-email'
                name='email'
                /* pattern='^[^@]+@[^@]+\.[a-zA-Z\.]+$' */
                onChange={handleLoginEmailChange}
                value={loginEmail}
                placeholder=''
                autoComplete='email'
                required
              />
              <label htmlFor='login-email'>Email</label>
            </div>
            <div className={`input-login-password ${loginError ? 'input-error' : ''}`}>
              
              <input
                type={isPasswordVisible ? "text" : "password"}
                id='login-password'
                name='password'
                onChange={handleLoginPasswordChange}
                value={loginPassword}
                placeholder=''
                required
              />
              <label htmlFor='login-password'>Password</label>
              <div
                className="password-visible-toggle"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              >
                <img
                  src={isPasswordVisible ? PasswordShowIcon : PasswordHideIcon}
                />
              </div>
            </div>
          </div>
          {loginError && (
            <div className="error-container">
              <WarningSVG />
              <div className="error-message">
                Please enter a valid email address and password.
              </div>
            </div> 
          )}
        </div>
        <div className='form-field'>
          <button 
            className='login-form-submit-btn'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? (
              <Ring
                size={30}
                lineWeight={5}
                speed={2}
                color="white"
              />
            ) : showCheckmark ? (
              <AuthCheckmarkSVG />
            ) :(
              "Login"
            )}
          </button>
        </div>
      </form>
      {/* <NoAccount /> */}
    </div>
  );
};

export default Login;
