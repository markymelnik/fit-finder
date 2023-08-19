import MobileMenuButton from './MobileMenu/MenuButton';
import Logo from '../Logo';
import SpaceFragment from './MobileMenu/SpaceFragment';
import MobileMenu from './MobileMenu/MobileMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import TintedOverlay from './MobileMenu/TintedOverlay';

const MobileHeader = () => {

  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);

  console.log(isMobileMenuOpen);

  return (
    <>
      {isMobileMenuOpen && (
        <>
          <MobileMenu />
          <TintedOverlay />
        </>
      )}
      <header className='header-container mobile-header'>
        <MobileMenuButton />
        <Logo />
        <SpaceFragment />
      </header>
    </>
  );
};

export default MobileHeader;
