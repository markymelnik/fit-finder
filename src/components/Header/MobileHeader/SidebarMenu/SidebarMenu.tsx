import LoginButton from "../../../common/button/auth/LoginButton";
import AccountLink from "../../DesktopHeader/AccountMenu/AccountLink";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import SidebarMenuCloseButton from "./SidebarMenuCloseButton/SidebarMenuCloseButton";
import TintedOverlay from "../../../common/TintedOverlay/TintedOverlay";
import { useDispatch } from "react-redux";
import { setIsSidebarMenuOpen } from "../../../../redux/slices/sidebarMenuSlice";
import Logo from "../../Logo/Logo";
import LogoutButton from "../../../common/button/auth/LogoutButton";
import AboutLink from "../../DesktopHeader/NavigationBar/AboutLink";
import SidebarMenuDivider from "./SidebarMenuDivider/SidebarMenuDivider";
import './_sidebar-menu.scss';

const SidebarMenu = () => {

  const isSidebarMenuOpen = useSelector((state: RootState) => state.sidebarMenu.isSidebarMenuOpen);
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const userAccountDetails = useSelector((state: RootState) => state.login.userAccount);
  
  const dispatch = useDispatch<AppDispatch>();

  const closeMobileMenu = () => {
    dispatch(setIsSidebarMenuOpen(false));
  }
  
  return (
    <>
      <TintedOverlay isActive={isSidebarMenuOpen} onCloseOverlay={closeMobileMenu} />
      <div className={`sidebar-menu-container ${isSidebarMenuOpen ? 'active' : ''} ${isLoggedIn ? '' : 'logged-out'}`}>
        <div className="sidebar-menu-top">
          <div className="sidebar-menu-header">
            <Logo />
            <SidebarMenuCloseButton />
          </div>
          <SidebarMenuDivider />
          <div className="sidebar-menu-link">
            <AboutLink customClass='about-link'/>
            <SidebarMenuDivider />
            {isLoggedIn && userAccountDetails && (
              <>
                <AccountLink customClass='account-link' /> 
                <SidebarMenuDivider />
              </>
              )
            }
          </div>
        </div>
        <div className="sidebar-menu-bottom">
          {isLoggedIn && userAccountDetails && (
            <>
              <div className='sidebar-menu-account-container'>
                <div className="sidebar-menu-account-information">
                  <div className="sidebar-menu-account-name">{userAccountDetails?.username}</div>
                  <div className="sidebar-menu-account-id">User ID: {userAccountDetails?.id}</div>
                </div>
              </div>
              <LogoutButton customClass="sidebar-menu-logout-btn"/>
            </>
          )}
          {!isLoggedIn && <LoginButton customClass="sidebar-menu-login-btn"/>}
        </div>
      </div>
    </>
  )
}

export default SidebarMenu;