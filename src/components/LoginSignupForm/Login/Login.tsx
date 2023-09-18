import { useDispatch } from 'react-redux';
import GoogleIcon from '../../../assets/icons/oauth/google-icon.png';
/* import AppleIcon from '../../../assets/icons/oauth/apple-icon.png'; */
import './_login.scss';
import { AppDispatch, RootState } from '../../../redux/store';
import { ChangeEvent, useEffect, useState } from 'react';
import { loginAccount } from '../../../redux/authentication/authenticationRequests';
import { setIsLoginFormShown } from '../../../redux/slices/loginFormSlice';
import { fetchFavoritedFacilities } from '../../../redux/apiRequests';
import { useSelector } from 'react-redux';

const Login = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  const userAccountId = useSelector((state: RootState) => state.authentication.userAccount?.id);

  useEffect(() => {
    if (userAccountId) {
      dispatch(fetchFavoritedFacilities(userAccountId));
    }
  }, [userAccountId]);

  const handleLoginUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginUsername(event.target.value);
  }

  const handleLoginPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(event.target.value);
  }

  const handleSubmitButtonClick = (event: any) => {
    event.preventDefault();
    if (loginUsername && loginPassword) {
      loginAccount(loginCredentials, dispatch)();
      dispatch(setIsLoginFormShown(false));
      setLoginUsername('');
      setLoginPassword('');
    }
  }

  const loginCredentials = {
    "username": loginUsername,
    "password": loginPassword
  }

  return (
    <div className='login-container'>
      <div className='login-form-descriptor'>Log In to fitfinder</div>
      <form id='login-form' className='login-form'>
        <div className='form-field'>
          <div className='enter-information'>
            <div className='input-login-username'>
              <label htmlFor='login-username'></label>
              <input
                type='text'
                id='login-username'
                name='username'
                onChange={handleLoginUsernameChange}
                value={loginUsername}
                placeholder='Username'
                autoComplete='username'
                required
              />
            </div>
            <div className='input-divider'>
              <div className='divider'></div>
            </div>
            <div className='input-login-password'>
              <label htmlFor='login-password'></label>
              <input
                type='text'
                id='login-password'
                name='password'
                onChange={handleLoginPasswordChange}
                value={loginPassword}
                placeholder='Password'
                required
              />
            </div>
          </div>
        </div>
        <div className='form-field'>
          <button 
            className='login-form-submit-btn'
            onClick={handleSubmitButtonClick}
          >
            Log In
          </button>
        </div>
      </form>
      <div className='form-divider'>
        <div className='divider'></div>
        <span className='divider-text'>OR</span>
      </div>
      <div className='oauth-container'>
        <div className='oauth-login-links'>
          <button className='oauth-google-btn' disabled>
            <div className="oauth-btn-icon">
              <img src={GoogleIcon} alt="google logo icon" />
            </div>
            <div className='oauth-btn-text'>Continue with Google</div>
          </button>
          {/* <button className='oauth-apple-btn'>
            <div className="oauth-btn-icon">
              <img src={AppleIcon} alt="apple logo icon" />
            </div>
            <div className='oauth-btn-text'>Continue with Apple</div>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
