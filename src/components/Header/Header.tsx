import { useSelector } from 'react-redux';

import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import { RootState } from '../../redux/store';

const Header = () => {
  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
