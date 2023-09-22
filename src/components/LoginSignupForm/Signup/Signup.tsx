import { ChangeEvent, FormEvent, useState } from 'react';
import { AppDispatch, RootState } from '../../../redux/store';
import { registerNewAccount } from '../../../redux/authentication/authenticationRequests';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Ring } from '@uiball/loaders';
import { resetRegisterError } from '../../../redux/authentication/register/registerActions';
import './_signup.scss';
import PasswordRequirements from './PasswordRequirements/PasswordRequirements';
import validatePassword from './PasswordRequirements/validatePassword';
import PasswordShowIcon from '../../../assets/icons/password/password-show.png';
import PasswordHideIcon from '../../../assets/icons/password/password-hide.png';
import WarningSVG from './PasswordRequirements/WarningSVG';
import AuthCheckmarkSVG from '../../../redux/authentication/AuthCheckmarkSVG';

const Signup = () => {

  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector((state: RootState) => state.loading === 1);
  const registerError = useSelector((state: RootState) => state.register.registerError);
  const showCheckmark = useSelector((state: RootState) => state.checkmarkSuccess.showCheckmark);

  const [signupEmail, setSignupEmail] = useState<string>('');
  const [signupPassword, setSignupPassword] = useState<string>('');

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [lengthRequirementSatisfied, setLengthRequirementSatisfied] = useState<boolean>(false);
  const [caseRequirementSatisfied, setCaseRequirementSatisfied] = useState<boolean>(false);
  const [numberRequirementSatisfied, setNumberRequirementSatisfied] = useState<boolean>(false);

  const handleSignupEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetRegisterError());
    setSignupEmail(event.target.value);
  }

  const handleSignupPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    dispatch(resetRegisterError());
    setSignupPassword(password);

    const validationResult = validatePassword(password);
    setLengthRequirementSatisfied(validationResult.isLengthSatisfied);
    setCaseRequirementSatisfied(validationResult.isCaseSatsified);
    setNumberRequirementSatisfied(validationResult.isNumberSatisfied);

    if (validationResult.isLengthSatisfied && validationResult.isCaseSatsified && validationResult.isNumberSatisfied) {
      setPasswordIsValid(true)
    } else {
      setPasswordIsValid(false);
    }
  }

  const handleSubmitButtonClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (signupEmail && signupPassword && passwordIsValid) {

      registerNewAccount(signupCredentials, dispatch)()
        .then(() => {
          setSignupEmail('');
          setSignupPassword('');
          setLengthRequirementSatisfied(false);
          setCaseRequirementSatisfied(false);
          setNumberRequirementSatisfied(false);
        })
        .catch(() => {
          console.error('unsuccessful register')
        })
    }
  }

  const signupCredentials = {
    "username": signupEmail,
    "password": signupPassword
  }

  return (
    <div className="signup-container">
      <div className="signup-form-descriptor">Sign Up for fitfinder</div>
      <form id="signup-form" className="signup-form" onSubmit={(event) => handleSubmitButtonClick(event)}>
        <div className="form-field">
          <div className="enter-information">
            <div
              className={`input-signup-email ${
                registerError ? "input-error" : ""
              }`}
            >
              <input
                type="email"
                id="signup-email"
                name="email"
                pattern='^[^@]+@[^@]+\.[a-zA-Z\.]+$'
                onChange={handleSignupEmailChange}
                value={signupEmail}
                placeholder=" "
                autoComplete="true"
                required
              />
              <label htmlFor="signup-email">Email</label>
            </div>
            <div
              className={`input-signup-password ${
                registerError ? "input-error" : ""
              }`}
            >
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="signup-password"
                name="password"
                onChange={handleSignupPasswordChange}
                value={signupPassword}
                placeholder=" "
                required
              />
              <label htmlFor="signup-password">Password</label>
              <div
                className="password-visible-toggle"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              >
                <img
                  src={isPasswordVisible ? PasswordShowIcon : PasswordHideIcon}
                />
              </div>
            </div>
          </div>
          {registerError && (
            <div className="error-container">
              <WarningSVG />
              <div className="error-message">
                An account with this email already exists.
              </div>
            </div>
          )}
        </div>
        <PasswordRequirements
          lengthRequirementSatisfied={lengthRequirementSatisfied}
          caseRequirementSatisfied={caseRequirementSatisfied}
          numberRequirementSatisfied={numberRequirementSatisfied}
          inputValue={signupPassword}
        />
        <div className="form-field">
          <button
            className={`signup-form-submit-btn ${
              !passwordIsValid ? "disabled-btn" : ""
            }`}
            type='submit'
            disabled={!passwordIsValid || isLoading}
          >
            {isLoading ? (
              <Ring size={30} lineWeight={5} speed={2} color="white" />
            ) : showCheckmark ? (
              <AuthCheckmarkSVG />
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
