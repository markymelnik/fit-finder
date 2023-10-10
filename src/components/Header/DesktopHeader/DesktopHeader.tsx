import NavigationBar from './NavigationBar/NavigationBar';
import useHeaderSearchbarVisibility from '../../../hooks/useHeaderSearchbarVisibility';
import HSearchbar from '../HSearchbar/HSearchbar';
import Logo from '../Logo/Logo';
import '../_header.scss';

const DesktopHeader = () => {
  
  const showSearchbar = useHeaderSearchbarVisibility();

  return (
    <header className='header-container'>
      <Logo />
      <HSearchbar show={showSearchbar}/>
      <NavigationBar />
    </header>
  );
};

export default DesktopHeader;
