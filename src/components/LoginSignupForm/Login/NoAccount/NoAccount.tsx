import { useDispatch } from "react-redux";
import "./_no-account.scss";
import { setActiveTab } from "../../../../redux/slices/loginFormSlice";

const NoAccount = () => {

  const dispatch = useDispatch();

  const handleToSignupClick = () => {
    dispatch(setActiveTab('signup'));
  }
  
  return (
    <div className="no-account-container">
      <div className="no-account-message">Need an account?</div>
      <button className="no-account-signup-link" onClick={handleToSignupClick}>Sign Up</button>
    </div>
  );
};

export default NoAccount;
