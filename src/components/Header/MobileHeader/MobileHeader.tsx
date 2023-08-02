import MobileMenuButton from "./MobileMenu/MobileMenu";
import Logo from '../Logo';
import SpaceFragment from "./MobileMenu/SpaceFragment";

const MobileHeader = () => {
  return (
    <header className='header-mobile-container'>
      <MobileMenuButton />
      <Logo />
      <SpaceFragment />
    </header>
  );
};

export default MobileHeader;