import MobileMenuButton from './MobileMenuOpenButton/MobileMenuOpenButton';
import Logo from '../Logo/Logo';
import SpaceFragment from './SpaceFragment/SpaceFragment';
import MobileMenu from './MobileMenu/MobileMenu';
import '../_header.scss';

const MobileHeader = () => {
  return (
    <>
      <header className='header-container'>
        <MobileMenuButton />
        <Logo />
        <SpaceFragment />
      </header>
      <MobileMenu />
    </>
  );
};

export default MobileHeader;
