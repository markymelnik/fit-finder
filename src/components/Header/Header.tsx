import Logo from './Logo';
import NavigationBar from './NavigationBar/NavigationBar';

const Header = () => {
  return (
    <header className='header-container'>
      <Logo />
      <NavigationBar />
    </header>
  );
};

export default Header;
