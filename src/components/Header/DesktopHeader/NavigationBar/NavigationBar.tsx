import HeaderLinks from './NavigationLinks/NavigationLinks';
import HeaderButtons from './NavigationButtons/NavigationButtons';

const NavigationBar = () => {
  return (
    <div className='navigation-bar'>
      <HeaderLinks />
      <HeaderButtons />
    </div>
  );
};

export default NavigationBar;
