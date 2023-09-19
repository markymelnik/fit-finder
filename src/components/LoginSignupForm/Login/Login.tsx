import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { ChangeEvent, useEffect, useState } from 'react';
import { loginAccount } from '../../../redux/authentication/authenticationRequests';
import { fetchFavoritedFacilities } from '../../../redux/apiRequests';
import { useSelector } from 'react-redux';
import { Ring } from '@uiball/loaders';
import { resetLoginError } from '../../../redux/authentication/login/loginActions';
import NoAccount from './NoAccount/NoAccount';
import PasswordShowIcon from '../../../assets/icons/password/password-show.png';
import PasswordHideIcon from '../../../assets/icons/password/password-hide.png';
import './_login.scss';

type LoginProps = {
  handleTabClick: (value: boolean) => void;
}

const Login = ({ handleTabClick }: LoginProps) => {

  const dispatch = useDispatch<AppDispatch>();
  
  const isLoading = useSelector((state: RootState) => state.loading === 1);
  const loginError = useSelector((state: RootState) => state.login.loginError);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  const loginCredentials = {
    "username": loginUsername,
    "password": loginPassword
  }

  const userAccountId = useSelector((state: RootState) => state.login.userAccount?.id);

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

  return (
    <div className='login-container'>
      <div className='login-form-descriptor'>Log In to fitfinder</div>
      <form id='login-form' className='login-form'>
        <div className='form-field'>
          <div className='enter-information'>
            <div className={`input-login-username ${loginError ? 'input-error' : ''}`}>
              
              <input
                type='text'
                id='login-username'
                name='username'
                onChange={handleLoginUsernameChange}
                value={loginUsername}
                placeholder=''
                autoComplete='username'
                required
              />
              <label htmlFor='login-username'>Username</label>
            </div>
            <div className={`input-login-password ${loginError ? 'input-error' : ''}`}>
              
              <input
                type='password'
                id='login-password'
                name='password'
                onChange={handleLoginPasswordChange}
                value={loginPassword}
                placeholder=''
                required
              />
              <label htmlFor='login-password'>Password</label>
              <div className='password-visible-toggle' onClick={() => setIsPasswordVisible(prev => !prev)}>
                <img src={isPasswordVisible ? PasswordShowIcon : PasswordHideIcon}/>
              </div>
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
      <NoAccount navigateToSignup={() => handleTabClick(false)}/>
    </div>
  );
};

export default Login;
