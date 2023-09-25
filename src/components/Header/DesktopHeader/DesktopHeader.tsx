import NavigationBar from './NavigationBar/NavigationBar';
import Logo from '../Logo/Logo';
import '../_header.scss';

const DesktopHeader = () => {
  return (
    <header className='header-container'>
      <Logo />
      <NavigationBar />
    </header>
  );
};

export default DesktopHeader;
