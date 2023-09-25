import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import CloseFormButton from './CloseAuthFormButton/CloseAuthFormButton';
import TabButton from './Tabs/TabButton/TabButton';
import LoginForm from './Tabs/LoginForm/LoginForm';
import SignupForm from './Tabs/SignupForm/SignupForm';
import TintedOverlay from '../common/TintedOverlay/TintedOverlay';
import { useDispatch } from 'react-redux';
import { setActiveAuthTab, setIsAuthFormShown } from '../../redux/slices/authFormSlice';
import { resetLoginError } from '../../redux/auth/login/loginActions';
import { resetRegisterError } from '../../redux/auth/register/registerActions';
import SuccessfulSignup from './SuccessfulSignup/SucessfulSignup';
import OrDivider from './Tabs/OAuth/OrDivider/OrDivider';
import './_auth-form.scss';

const AuthForm = () => {

  const dispatch = useDispatch<AppDispatch>();
  const isAuthFormOpen = useSelector((state: RootState) => state.authForm.isAuthFormOpen);
  const activeTab = useSelector((state: RootState) => state.authForm.activeAuthTab);
  const isSuccessfulSignupShown = useSelector((state: RootState) => state.successfulSignup.isSuccessfulSignupShown);

  const handleTabClick = (currentTab: 'login' | 'signup') => {
    if (currentTab != activeTab) {
      dispatch(setActiveAuthTab(currentTab));
      dispatch(resetLoginError());
      dispatch(resetRegisterError());
    }
  }

  const closeLoginSignupForm = () => {
    dispatch(setIsAuthFormShown(false));
  }

  return (
    <div className={`auth-overlay ${isAuthFormOpen ? 'active' : ''}`}>
      <TintedOverlay isActive={isAuthFormOpen} onCloseOverlay={closeLoginSignupForm} />
      {isSuccessfulSignupShown && <SuccessfulSignup />}
      {!isSuccessfulSignupShown && 
        <div className='auth-form-container'>
          <CloseFormButton />
          <div className="auth-nav-tabs">
            <TabButton buttonText='LoginForm' isActive={activeTab === 'login'} onClick={() => handleTabClick('login')}/>
            <TabButton buttonText='Sign Up' isActive={activeTab === 'signup'} onClick={() => handleTabClick('signup')}/>
          </div>
          {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
          <OrDivider />
        </div>
      }
    </div>
  )
}

export default AuthForm;
