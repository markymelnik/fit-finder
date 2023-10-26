import SuccessSVG from '../../../assets/svg/auth/SuccessSVG';
import LoginButton from '../../common/button/auth/LoginButton';
import './_successful-signup.scss';

const SuccessfulSignup = () => {

  return (
    <div className="successful-signup-container">
      <div className="text-container">
        <div className="success-text">Success!</div>
        <div className="account-creation-text">Your account has been created.</div>
      </div>
      <div className="congrats-svg-container">
        <SuccessSVG />
      </div>
      <LoginButton customClass='successful-signup-login-btn' />
    </div>
  )
}

export default SuccessfulSignup;