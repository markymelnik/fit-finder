import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CloseFormButton from './CloseFormButton/CloseFormButton';
import './_login-form.scss';

const LoginForm = () => {

  const isLoginFormShown = useSelector((state: RootState) => state.isLoginFormShown.isLoginFormShown);

  document.body.style.overflow = isLoginFormShown ? 'hidden' : 'auto';

  return (
    <div className={`login-overlay ${isLoginFormShown ? 'active' : ''}`}>
      <div className={`login-form-container`}>
        <CloseFormButton />
        <div className="login-signup-container">
          <button className="login-tab">Log In</button>
          <button className="signup-tab">Sign Up</button>
        </div>
        <div className="login-form-descriptor">
          Log In / Sign Up Below
        </div>

        <form id="login-form" className='login-form'>

          <div className="form-field">
            <div className="form-input">
              <label htmlFor="email"></label>
              <input type="email" id='email' name='email' placeholder='Email'required />
            </div>
          </div>
          <div className="form-field">
            <div className="form-input">
              <label htmlFor="password"></label>
              <input type="password" id='password' name='password' placeholder='Password' required />
            </div>
          </div>
          <div className="form-field">
            <div className="space"></div>
          </div>
          <div className="form-field">
            <button className='form-submit-btn'></button>
          </div>
        </form>
        
      </div>
    </div>
    
  )
}

export default LoginForm;
