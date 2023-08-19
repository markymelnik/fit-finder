import Logo from '../Logo';
import NavigationBar from './NavigationBar/NavigationBar';

const DesktopHeader = () => {
  return (
    <header className='header-container desktop-header'>
      <Logo />
      <NavigationBar />
    </header>
  );
};

export default DesktopHeader;
