import { ChangeEvent, useState } from 'react';
import { AppDispatch, RootState } from '../../../redux/store';
import { registerNewAccount } from '../../../redux/authentication/authenticationRequests';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Ring } from '@uiball/loaders';
import { resetRegisterError } from '../../../redux/authentication/register/registerActions';
import HasAccount from './HasAccount/HasAccount';
import './_signup.scss';
import PasswordRequirements from './PasswordRequirements/PasswordRequirements';
import validatePassword from './PasswordRequirements/ValidatePassword';

const Signup = () => {

  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector((state: RootState) => state.loading === 1);
  const registerError = useSelector((state: RootState) => state.register.registerError);

  const [signupUsername, setSignupUsername] = useState<string>('');
  const [signupPassword, setSignupPassword] = useState<string>('');

  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);

  const [lengthRequirementSatisfied, setLengthRequirementSatisfied] = useState<boolean>(false);
  const [caseRequirementSatisfied, setCaseRequirementSatisfied] = useState<boolean>(false);
  const [numberRequirementSatisfied, setNumberRequirementSatisfied] = useState<boolean>(false);

  const handleSignupUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetRegisterError());
    setSignupUsername(event.target.value);
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

  const handleSubmitClickButton = (event: any) => {
    event.preventDefault();
    if (signupUsername && signupPassword && passwordIsValid) {

      registerNewAccount(signupCredentials, dispatch)()
        .then(() => {
          setSignupUsername('');
          setSignupPassword('');
        })
        .catch(() => {
          console.error('unsuccessful register')
        })
    }
  }

  const signupCredentials = {
    "username": signupUsername,
    "password": signupPassword
  }

  return (
    <div className="signup-container">
      <div className="signup-form-descriptor">Sign Up for fitfinder</div>
      <form id="signup-form" className="signup-form">
        <div className="form-field">
          <div className="enter-information">
            <div
              className={`input-signup-username ${
                registerError ? "input-error" : ""
              }`}
            >
              <label htmlFor="signup-username"></label>
              <input
                type="text"
                id="signup-username"
                name="username"
                onChange={handleSignupUsernameChange}
                value={signupUsername}
                placeholder="Username"
                autoComplete="true"
                required
              />
            </div>
            <div
              className={`input-signup-password ${
                registerError ? "input-error" : ""
              }`}
            >
              <label htmlFor="signup-password"></label>
              <input
                type="text"
                id="signup-password"
                name="password"
                onChange={handleSignupPasswordChange}
                value={signupPassword}
                placeholder="Password"
                required
              />
            </div>
          </div>
          {registerError && (
            <div className="error-message">
              An account with this email already exists.
            </div>
          )}
        </div>
        <PasswordRequirements
          lengthRequirementSatisfied={lengthRequirementSatisfied}
          caseRequirementSatisfied={caseRequirementSatisfied}
          numberRequirementSatisfied={numberRequirementSatisfied}
        />
        <div className="form-field">
          <button
            className={`signup-form-submit-btn ${
              !passwordIsValid ? "disabled-btn" : ""
            }`}
            onClick={handleSubmitClickButton}
            disabled={!passwordIsValid || isLoading}
          >
            {isLoading ? (
              <Ring size={30} lineWeight={5} speed={2} color="white" />
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>
      <HasAccount />
    </div>
  );
};

export default Signup;
