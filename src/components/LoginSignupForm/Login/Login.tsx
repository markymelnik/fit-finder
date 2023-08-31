import './_login.scss';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form-descriptor'>Log In to fitfinder</div>
      <form id='login-form' className='login-form'>
        <div className='form-field'>
          <div className="enter-information">
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
            <div className="input-divider">
              <div className="divider"></div>
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
          <div className='space'></div>
        </div>
        <div className='form-field'>
          <button className='login-form-submit-btn'>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
