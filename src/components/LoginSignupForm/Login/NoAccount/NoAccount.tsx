import "./_no-account.scss";

type NoAccountProps = {
  navigateToSignup: () => void;
}

const NoAccount = ({ navigateToSignup }: NoAccountProps) => {

  const handleToSignupClick = () => {
    navigateToSignup();
  }
  
  return (
    <div className="no-account-container">
      <div className="no-account-message">Need an account?</div>
      <button className="no-account-signup-link" onClick={handleToSignupClick}>Sign Up</button>
    </div>
  );
};

export default NoAccount;
