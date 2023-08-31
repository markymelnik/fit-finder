import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CloseFormButton from './CloseFormButton/CloseFormButton';
import TabButton from './TabButton/TabButton';
import './_login-signup-form.scss';
import { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const LoginForm = () => {

  const [activeTab, setActiveTab] = useState<boolean>(true);

  const isLoginFormShown = useSelector((state: RootState) => state.isLoginFormShown.isLoginFormShown);

  document.body.style.overflow = isLoginFormShown ? 'hidden' : 'auto';

  const handleTabClick = () => {
    setActiveTab((prevActiveTab) => !prevActiveTab);
  }

  return (
    <div className={`login-overlay ${isLoginFormShown ? 'active' : ''}`}>
      <div className='login-form-container'>
        <CloseFormButton />
        <div className="login-signup-container">
          <TabButton buttonText='Login' isActive={activeTab} onClick={handleTabClick}/>
          <TabButton buttonText='Signup' isActive={!activeTab} onClick={handleTabClick}/>
        </div>
        {activeTab ? <Login /> : <Signup />}
      </div>
    </div>
    
  )
}

export default LoginForm;
