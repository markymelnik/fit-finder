import { useSelector } from 'react-redux';
import MobileHeader from './MobileHeader/MobileHeader';
import DesktopHeader from './DesktopHeader/DesktopHeader';

const Header = () => {
  const isMobile = useSelector((state) => state.isMobile);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
