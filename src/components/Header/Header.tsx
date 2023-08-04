import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MobileHeader from './MobileHeader/MobileHeader';
import DesktopHeader from './DesktopHeader/DesktopHeader';

const Header = () => {
  const isMobile = useSelector((state: RootState) => state.isMobile);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
