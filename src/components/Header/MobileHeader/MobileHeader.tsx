import MobileMenuButton from './MobileMenu/MobileMenuButton';
import Logo from '../Logo';
import SpaceFragment from './MobileMenu/SpaceFragment';

const MobileHeader = () => {
  return (
    <header className='header-container header-mobile'>
      <MobileMenuButton />
      <Logo />
      <SpaceFragment />
    </header>
  );
};

export default MobileHeader;
