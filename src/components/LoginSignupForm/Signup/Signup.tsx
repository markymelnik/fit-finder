import './_signup.scss';

const Signup = () => {
  return (
    <div className='signup-container'>
      <div className='signup-form-descriptor'>Sign Up for fitfinder</div>
      <form id='signup-form' className='signup-form'>
        <div className='form-field'>
          <div className='enter-information'>
            <div className='input-signup-email'>
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
            <div className='input-signup-password'>
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
          <button className='signup-form-submit-btn'>Sign Up</button>
        </div>
      </form>
      <div className='form-divider'>
        <div className='divider'></div>
        <span className='divider-text'>OR</span>
      </div>
      <div className='oauth-container'>
        <div className='oauth-login-links'>
          <button className='oauth-google-btn'>
            <div className='oauth-btn-text'>Continue with Google</div>
          </button>
          <button className='oauth-apple-btn'>
            <div className='oauth-btn-text'>Continue with Apple</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
