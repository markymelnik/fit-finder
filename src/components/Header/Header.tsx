import Logo from './Logo';
import MobileMenuButton from './MobileMenu/MobileMenu';
import SpaceFragment from './MobileMenu/SpaceFragment';
import NavigationBar from './NavigationBar/NavigationBar';

const Header = () => {
  return (
    <header className='header-container'>
      <MobileMenuButton />
      <Logo />
      <SpaceFragment />
    </header>
  );
};

export default Header;
