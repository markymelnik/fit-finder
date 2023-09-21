import { useDispatch } from "react-redux";
import "./_has-account.scss";
import { setActiveTab } from "../../../../redux/slices/loginFormSlice";

const HasAccount = () => {

  const dispatch = useDispatch();

  const handleToLoginClick = () => {
    dispatch(setActiveTab('login'));
  }
  
  return (
    <div className="has-account-container">
      <div className="has-account-message">Have an account?</div>
      <button className="has-account-signup-link" onClick={handleToLoginClick}>Login</button>
    </div>
  );
};

export default HasAccount;