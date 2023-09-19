import "./_no-account.scss";

const NoAccount = () => {

  const handleToSignupClick = () => {

  }
  
  return (
    <div className="no-account-container">
      <div className="no-account-message">Need an account?</div>
      <button className="no-account-signup-link" onClick={handleToSignupClick}>SIGN UP</button>
    </div>
  );
};

export default NoAccount;
