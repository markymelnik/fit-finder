import Logo from '../Logo';
import NavigationBar from './NavigationBar/NavigationBar';

const DesktopHeader = () => {
  return (
    <header className='header-container header-desktop'>
      <Logo />
      <NavigationBar />
    </header>
  );
};

export default DesktopHeader;
