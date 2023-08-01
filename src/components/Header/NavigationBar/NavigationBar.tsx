import HeaderLinks from './HeaderLinks/HeaderLinks';
import HeaderButtons from './HeaderButtons/HeaderButtons';

const NavigationBar = () => {
  return (
    <div className='navigation-bar'>
      <HeaderLinks />
      <HeaderButtons />
    </div>
  );
};

export default NavigationBar;
