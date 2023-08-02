import MobileHeader from './MobileHeader/MobileHeader';
import DesktopHeader from './DesktopHeader/DesktopHeader';

const Header = ({ useIsMobile }) => {
  return useIsMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
