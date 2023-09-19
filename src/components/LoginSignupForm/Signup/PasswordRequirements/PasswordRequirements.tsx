import './_password-requirements.scss';
import CheckMarkSVG from './CheckMarkSVG';
import XMarkSVG from './XMarkSVG';

type PasswordRequirementsProps = {
  lengthRequirementSatisfied: boolean;
  caseRequirementSatisfied: boolean;
  numberRequirementSatisfied: boolean;
}

const PasswordRequirements = ({ lengthRequirementSatisfied, caseRequirementSatisfied, numberRequirementSatisfied }: PasswordRequirementsProps) => {

  return (
    <div className="password-req-container">
      <div className="password-req-title">Password:</div>
      <div className={`password-req-line ${lengthRequirementSatisfied ? 'satisfied' : 'not-satisfied'}`}>
        <div className="password-req-icon">
        {lengthRequirementSatisfied ? <CheckMarkSVG /> : <XMarkSVG />}
        </div>
        <div className="password-req-text">Must be between 10 and 20 characters</div>
      </div>
      <div className={`password-req-line ${caseRequirementSatisfied ? 'satisfied' : 'not-satisfied'}`}>
        <div className="password-req-icon">
          {caseRequirementSatisfied ? <CheckMarkSVG /> : <XMarkSVG />}
        </div>
        <div className="password-req-text">Must contain both upper and lower case letters</div>
      </div>
      <div className={`password-req-line ${numberRequirementSatisfied ? 'satisfied' : 'not-satisfied'}`}>
        <div className="password-req-icon">
          {numberRequirementSatisfied ? <CheckMarkSVG /> : <XMarkSVG />}
        </div>
        <div className="password-req-text">Must contain at least 1 number</div>
      </div>
    </div>
  )
}

export default PasswordRequirements;