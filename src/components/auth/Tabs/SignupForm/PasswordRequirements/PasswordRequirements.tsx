import './_password-requirements.scss';
import CheckMarkSVG from './CheckMarkSVG';
import NeutralSVG from './NeutralSVG';
import XMarkSVG from './XMarkSVG';

type PasswordRequirementsProps = {
  lengthRequirementSatisfied: boolean;
  caseRequirementSatisfied: boolean;
  numberRequirementSatisfied: boolean;
  inputValue: string;
}

const PasswordRequirements = ({ lengthRequirementSatisfied, caseRequirementSatisfied, numberRequirementSatisfied, inputValue }: PasswordRequirementsProps) => {

  return (
    <div className="password-req-container">
      <div className="password-req-title">Password:</div>
      <div className={`password-req-line ${!inputValue ? 'default' : (lengthRequirementSatisfied ? 'satisfied' : 'not-satisfied')}`}>
        <div className="password-req-icon">
        {
          !inputValue ? 
          <NeutralSVG /> : 
          (lengthRequirementSatisfied ? <CheckMarkSVG /> : <XMarkSVG />)
        }
        </div>
        <div className="password-req-text">Must be between 10 and 20 characters</div>
      </div>
      <div className={`password-req-line ${!inputValue ? 'default' : (caseRequirementSatisfied ? 'satisfied' : 'not-satisfied')}`}>
        <div className="password-req-icon">
        {
          !inputValue ? 
          <NeutralSVG /> : 
          (caseRequirementSatisfied ? <CheckMarkSVG /> : <XMarkSVG />)
        }
        </div>
        <div className="password-req-text">Must contain both upper and lower case letters</div>
      </div>
      <div className={`password-req-line ${!inputValue ? 'default' : (numberRequirementSatisfied ? 'satisfied' : 'not-satisfied')}`}>
        <div className="password-req-icon">
        {
          !inputValue ? 
          <NeutralSVG /> : 
          (numberRequirementSatisfied ? <CheckMarkSVG /> : <XMarkSVG />)
        }
        </div>
        <div className="password-req-text">Must contain at least 1 number</div>
      </div>
    </div>
  )
}

export default PasswordRequirements;