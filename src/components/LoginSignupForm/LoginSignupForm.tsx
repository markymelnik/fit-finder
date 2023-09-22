import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import CloseFormButton from './CloseFormButton/CloseFormButton';
import TabButton from './TabButton/TabButton';
import './_login-signup-form.scss';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import TintedOverlay from '../TintedOverlay/TintedOverlay';
import { useDispatch } from 'react-redux';
import { setActiveTab, setIsLoginFormShown } from '../../redux/slices/loginFormSlice';
import { resetLoginError } from '../../redux/authentication/login/loginActions';
import { resetRegisterError } from '../../redux/authentication/register/registerActions';
import SuccessfulSignup from './SuccessfulSignup/SucessfulSignup';
import OrDivider from './OrDivider/OrDivider';

const LoginSignupForm = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isLoginFormShown = useSelector((state: RootState) => state.isLoginFormShown.isLoginFormShown);
  const activeTab = useSelector((state: RootState) => state.isLoginFormShown.activeTab);
  const isSuccessfulSignupShown = useSelector((state: RootState) => state.isSuccessfulSignupShown.isSuccessfulSignupShown);

  const handleTabClick = (currentTab: 'login' | 'signup') => {
    if (currentTab != activeTab) {
      dispatch(setActiveTab(currentTab));
      dispatch(resetLoginError());
      dispatch(resetRegisterError());
    }
  }

  const closeLoginSignupForm = () => {
    dispatch(setIsLoginFormShown(false));
  }

  return (
    <div className={`login-signup-overlay ${isLoginFormShown ? 'active' : ''}`}>
      <TintedOverlay isActive={isLoginFormShown} onCloseOverlay={closeLoginSignupForm} />
      {isSuccessfulSignupShown && <SuccessfulSignup />}
      {!isSuccessfulSignupShown && 
        <div className='login-signup-form-container'>
          <CloseFormButton />
          <div className="login-signup-tabs">
            <TabButton buttonText='Login' isActive={activeTab === 'login'} onClick={() => handleTabClick('login')}/>
            <TabButton buttonText='Sign Up' isActive={activeTab === 'signup'} onClick={() => handleTabClick('signup')}/>
          </div>
          {activeTab === 'login' ? <Login /> : <Signup />}
          <OrDivider />
        </div>
      }
    </div>
  )
}

export default LoginSignupForm;
