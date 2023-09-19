import { useDispatch } from 'react-redux';
import GoogleIcon from '../../../assets/icons/oauth/google-icon.png';
/* import AppleIcon from '../../../assets/icons/oauth/apple-icon.png'; */
import './_login.scss';
import { AppDispatch, RootState } from '../../../redux/store';
import { ChangeEvent, useEffect, useState } from 'react';
import { loginAccount } from '../../../redux/authentication/authenticationRequests';
import { fetchFavoritedFacilities } from '../../../redux/apiRequests';
import { useSelector } from 'react-redux';
import { Ring } from '@uiball/loaders';
import { resetLoginError } from '../../../redux/authentication/authenticationActions';

const Login = () => {

  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector((state: RootState) => state.loading === 1);
  const loginError = useSelector((state: RootState) => state.authentication.loginError);

  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  const userAccountId = useSelector((state: RootState) => state.authentication.userAccount?.id);

  useEffect(() => {
    if (userAccountId) {
      dispatch(fetchFavoritedFacilities(userAccountId));
    }
  }, [userAccountId]);

  const handleLoginUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetLoginError());
    setLoginUsername(event.target.value);
  }

  const handleLoginPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetLoginError());
    setLoginPassword(event.target.value);
  }

  const handleSubmitButtonClick = (event: any) => {
    event.preventDefault();
    if (loginUsername && loginPassword) {

      loginAccount(loginCredentials, dispatch)()
        .then(() => {
          setLoginUsername('');
          setLoginPassword('');
        })
        .catch(() => {
          console.error("unsuccessful login");
        })
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
          <div className={`enter-information ${loginError ? 'input-error' : ''}`}>
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
          {loginError && <div className='error-message'>Please enter a valid email address and password.</div> }
        </div>
        <div className='form-field'>
          <button 
            className='login-form-submit-btn'
            onClick={handleSubmitButtonClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <Ring
                size={30}
                lineWeight={5}
                speed={2}
                color="white"
              />
            ) : (
              "Log In"
            )}
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
