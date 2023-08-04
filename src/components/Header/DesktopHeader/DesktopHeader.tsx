import Logo from '../Logo';
import NavigationBar from './NavigationBar/NavigationBar';

const DesktopHeader = () => {
  return (
    <header className='header-desktop-container'>
      <Logo />
      <NavigationBar />
    </header>
  );
};

export default DesktopHeader;
