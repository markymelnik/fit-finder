import GoogleIcon from '../../../assets/icons/oauth/google-icon.png';
import AppleIcon from '../../../assets/icons/oauth/apple-icon.png';
import './_login.scss';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form-descriptor'>Log In to fitfinder</div>
      <form id='login-form' className='login-form'>
        <div className='form-field'>
          <div className='enter-information'>
            <div className='input-login-email'>
              <label htmlFor='email'></label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                required
              />
            </div>
            <div className='input-divider'>
              <div className='divider'></div>
            </div>
            <div className='input-login-password'>
              <label htmlFor='password'></label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                required
              />
            </div>
          </div>
        </div>
        <div className='form-field'>
          <button className='login-form-submit-btn'>Log In</button>
        </div>
      </form>
      <div className='form-divider'>
        <div className='divider'></div>
        <span className='divider-text'>OR</span>
      </div>
      <div className='oauth-container'>
        <div className='oauth-login-links'>
          <button className='oauth-google-btn'>
            <div className="oauth-btn-icon">
              <img src={GoogleIcon} alt="google logo icon" />
            </div>
            <div className='oauth-btn-text'>Continue with Google</div>
          </button>
          <button className='oauth-apple-btn'>
            <div className="oauth-btn-icon">
              <img src={AppleIcon} alt="apple logo icon" />
            </div>
            <div className='oauth-btn-text'>Continue with Apple</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
