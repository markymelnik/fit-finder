import "./_has-account.scss";

const HasAccount = () => {

  const handleToLoginClick = () => {

  }
  
  return (
    <div className="has-account-container">
      <div className="has-account-message">Have an account?</div>
      <button className="has-account-signup-link" onClick={handleToLoginClick}>LOG IN</button>
    </div>
  );
};

export default HasAccount;