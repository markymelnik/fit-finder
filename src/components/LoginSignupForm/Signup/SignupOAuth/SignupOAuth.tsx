import './_signup-oauth.scss';
import GoogleIcon from '../../../../assets/icons/oauth/google-icon.png';

const SignupOAuth = () => {

  return (
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
  )
}

export default SignupOAuth;