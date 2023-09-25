import SidebarMenuOpenButton from './SidebarMenu/SidebarMenuOpenButton/SidebarMenuOpenButton';
import Logo from '../Logo/Logo';
import SpaceFragment from './SpaceFragment/SpaceFragment';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import '../_header.scss';

const MobileHeader = () => {
  return (
    <>
      <header className='header-container'>
        <SidebarMenuOpenButton />
        <Logo />
        <SpaceFragment />
      </header>
      <SidebarMenu />
    </>
  );
};

export default MobileHeader;
