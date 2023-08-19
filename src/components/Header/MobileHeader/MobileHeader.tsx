import MobileMenuButton from './MobileMenu/MenuButton';
import Logo from '../Logo';
import SpaceFragment from './MobileMenu/SpaceFragment';
import MobileMenu from './MobileMenu/MobileMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import TintedOverlay from './MobileMenu/TintedOverlay';
import { useEffect, useState } from 'react';

const MobileHeader = () => {

  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  console.log(isMobileMenuOpen);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setShowOverlay(true);
    } else {
      setTimeout(() => {
        setShowOverlay(true);
      }, 300);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {showOverlay && <TintedOverlay isActive={isMobileMenuOpen}/>}
      <header className='header-container mobile-header'>
        <MobileMenuButton />
        <Logo />
        <SpaceFragment />
      </header>
      <MobileMenu />
    </>
  );
};

export default MobileHeader;
