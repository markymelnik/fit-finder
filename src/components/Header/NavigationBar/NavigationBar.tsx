import NavigationLinks from "./NavigationLinks/NavigationLinks";
import './_navigation-bar.scss';

const NavigationBar = () => {
  return (
    <div className='navigation-bar'>
      <NavigationLinks />
    </div>
  );
};

export default NavigationBar;
