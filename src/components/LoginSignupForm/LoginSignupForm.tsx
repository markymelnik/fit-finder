import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import CloseFormButton from './CloseFormButton/CloseFormButton';
import TabButton from './TabButton/TabButton';
import './_login-signup-form.scss';
import { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import TintedOverlay from '../TintedOverlay/TintedOverlay';
import { useDispatch } from 'react-redux';
import { setIsLoginFormShown } from '../../redux/slices/loginFormSlice';
import { resetLoginError } from '../../redux/authentication/login/loginActions';
import { resetRegisterError } from '../../redux/authentication/register/registerActions';

const LoginSignupForm = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isLoginFormShown = useSelector((state: RootState) => state.isLoginFormShown.isLoginFormShown);
  const [activeTab, setActiveTab] = useState<boolean>(true);

  const handleTabClick = (currentTab: boolean) => {
    if (currentTab != activeTab) {
      setActiveTab(currentTab);
    }
    dispatch(resetLoginError());
    dispatch(resetRegisterError());
  }

  const closeLoginSignupForm = () => {
    dispatch(setIsLoginFormShown(false));
  }

  return (
    <>
      <div className={`login-signup-overlay ${isLoginFormShown ? 'active' : ''}`}>
        <TintedOverlay isActive={isLoginFormShown} onCloseOverlay={closeLoginSignupForm} />
        <div className='login-signup-form-container'>
          <CloseFormButton />
          <div className="login-signup-tabs">
            <TabButton buttonText='Login' isActive={activeTab} onClick={() => handleTabClick(true)}/>
            <TabButton buttonText='Sign Up' isActive={!activeTab} onClick={() => handleTabClick(false)}/>
          </div>
          {activeTab ? <Login handleTabClick={handleTabClick} /> : <Signup handleTabClick={handleTabClick} />}
        </div>
      </div>
    </>
  )
}

export default LoginSignupForm;
