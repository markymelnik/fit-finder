import "./_has-account.scss";

type HasAccountProps = {
  navigateToLogin: () => void;
}

const HasAccount = ({ navigateToLogin }: HasAccountProps) => {

  const handleToLoginClick = () => {
    navigateToLogin();
  }
  
  return (
    <div className="has-account-container">
      <div className="has-account-message">Have an account?</div>
      <button className="has-account-signup-link" onClick={handleToLoginClick}>Login</button>
    </div>
  );
};

export default HasAccount;