import { ChangeEvent, useState } from 'react';
import GoogleIcon from '../../../assets/icons/oauth/google-icon.png';
/* import AppleIcon from '../../../assets/icons/oauth/apple-icon.png'; */
import './_signup.scss';
import { AppDispatch } from '../../../redux/store';
import { registerNewAccount } from '../../../redux/authentication/authenticationRequests';
import { useDispatch } from 'react-redux';
import { setIsLoginFormShown } from '../../../redux/slices/loginFormSlice';

const Signup = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [signupUsername, setSignupUsername] = useState<string>('');
  const [signupPassword, setSignupPassword] = useState<string>('');

  const handleSignupUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignupUsername(event.target.value);
  }

  const handleSignupPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignupPassword(event.target.value);
  }

  const handleSubmitClickButton = (event: any) => {
    event.preventDefault();
    if (signupUsername && signupPassword) {
      registerNewAccount(signupCredentials)();
      dispatch(setIsLoginFormShown(false));
      setSignupUsername('');
      setSignupPassword('');
    }
  }

  const signupCredentials = {
    "username": signupUsername,
    "password": signupPassword
  }

  return (
    <div className='signup-container'>
      <div className='signup-form-descriptor'>Sign Up for fitfinder</div>
      <form id='signup-form' className='signup-form'>
        <div className='form-field'>
          <div className='enter-information'>
            <div className='input-signup-username'>
              <label htmlFor='signup-username'></label>
              <input
                type='text'
                id='signup-username'
                name='username'
                onChange={handleSignupUsernameChange}
                value={signupUsername}
                placeholder='Username'
                required
                //
                disabled
              />
            </div>
            <div className='input-divider'>
              <div className='divider'></div>
            </div>
            <div className='input-signup-password'>
              <label htmlFor='signup-password'></label>
              <input
                type='text'
                id='signup-password'
                name='password'
                onChange={handleSignupPasswordChange}
                value={signupPassword}
                placeholder='Password'
                required
                //
                disabled
              />
            </div>
          </div>
        </div>
        <div className='form-field'>
          <button 
            className='signup-form-submit-btn'
            onClick={handleSubmitClickButton}
          >
            Sign Up
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

export default Signup;
