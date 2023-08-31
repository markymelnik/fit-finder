import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CloseFormButton from './CloseFormButton/CloseFormButton';
import TabButton from './TabButton/TabButton';
import './_login-signup-form.scss';
import { useEffect, useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import TintedOverlay from '../Header/Mobile/TintedOverlay/TintedOverlay';

const LoginForm = () => {

  const isLoginFormShown = useSelector((state: RootState) => state.isLoginFormShown.isLoginFormShown);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<boolean>(true);

  document.body.style.overflow = isLoginFormShown ? 'hidden' : 'auto';

  useEffect(() => {
    if (isLoginFormShown) {
      setShowOverlay(true);
    } else {
      setTimeout(() => {
        setShowOverlay(true);
      }, 200)
    }
  }, [isLoginFormShown]);


  const handleTabClick = (currentTab: boolean) => {
    if (currentTab != activeTab) {
      setActiveTab(currentTab);
    }
  }

  return (
    <div className={`login-signup-overlay ${isLoginFormShown ? 'active' : ''}`}>
      {showOverlay && <TintedOverlay isActive={isLoginFormShown} />}
      <div className='login-signup-form-container'>
        <CloseFormButton />
        <div className="login-signup-container">
          <TabButton buttonText='Login' isActive={activeTab} onClick={() => handleTabClick(true)}/>
          <TabButton buttonText='Signup' isActive={!activeTab} onClick={() => handleTabClick(false)}/>
        </div>
        {activeTab ? <Login /> : <Signup />}
      </div>
    </div>
  )
}

export default LoginForm;
