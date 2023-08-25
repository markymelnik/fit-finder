import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MobileHeader from './Mobile/MobileHeader';
import DesktopHeader from './Desktop/DesktopHeader';

const Header = () => {
  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
