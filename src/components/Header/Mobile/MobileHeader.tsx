import MobileMenuButton from './MobileMenuOpenButton/MobileMenuOpenButton';
import Logo from '../Logo/Logo';
import SpaceFragment from './SpaceFragment/SpaceFragment';
import MobileMenu from './MobileMenu/MobileMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import TintedOverlay from './TintedOverlay/TintedOverlay';
import { useEffect, useState } from 'react';
import '../_header.scss';

const MobileHeader = () => {

  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setShowOverlay(true);
    } else {
      setTimeout(() => {
        setShowOverlay(true);
      }, 200);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {showOverlay && <TintedOverlay isActive={isMobileMenuOpen}/>}
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
