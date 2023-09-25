import SidebarMenu from './SidebarMenu/SidebarMenu';
import SidebarMenuOpenButton from './SidebarMenu/SidebarMenuOpenButton/SidebarMenuOpenButton';
import SpaceFragment from './SpaceFragment/SpaceFragment';
import Logo from '../Logo/Logo';
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
