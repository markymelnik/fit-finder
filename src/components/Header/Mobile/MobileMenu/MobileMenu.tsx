import LoginButton from "../../../common/button/auth/LoginButton";
import AccountLink from "../../Desktop/NavigationBar/AccountLink";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import MobileMenuCloseButton from "./MobileMenuCloseButton/MobileMenuCloseButton";
import './_mobile-menu.scss';
import TintedOverlay from "../../../TintedOverlay/TintedOverlay";
import { useDispatch } from "react-redux";
import { setIsMobileMenuOpen } from "../../../../redux/slices/mobileMenuSlice";
import Logo from "../../Logo/Logo";
import LogoutButton from "../../../common/button/auth/LogoutButton";
import AboutLink from "../../Desktop/NavigationBar/AboutLink";
import MobileMenuDivider from "./MobileMenuDivider/MobileMenuDivider";

const MobileMenu = () => {

  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const userAccountDetails = useSelector((state: RootState) => state.login.userAccount);
  
  const dispatch = useDispatch<AppDispatch>();

  const closeMobileMenu = () => {
    dispatch(setIsMobileMenuOpen(false));
  }
  
  return (
    <>
      <TintedOverlay isActive={isMobileMenuOpen} onCloseOverlay={closeMobileMenu} />
      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''} ${isLoggedIn ? '' : 'logged-out'}`}>
        <div className="mobile-menu-top">
          <div className="mobile-menu-header">
            <Logo />
            <MobileMenuCloseButton />
          </div>
          <MobileMenuDivider />
          <div className="mobile-menu-link">
            <AboutLink customClass='about-link'/>
            <MobileMenuDivider />
            {isLoggedIn && userAccountDetails && (
              <>
                <AccountLink customClass='account-link' /> 
                <MobileMenuDivider />
              </>
              )
            }
          </div>
        </div>
        <div className="mobile-menu-bottom">
          {isLoggedIn && userAccountDetails && (
            <>
              <div className='mobile-menu-account-container'>
                <div className="mobile-menu-account-information">
                  <div className="mobile-menu-account-name">{userAccountDetails?.username}</div>
                  <div className="mobile-menu-account-id">User ID: {userAccountDetails?.id}</div>
                </div>
              </div>
              <LogoutButton customClass="mobile-menu-logout-btn"/>
            </>
          )}
          {!isLoggedIn && <LoginButton customClass="mobile-menu-login-btn"/>}
        </div>
      </div>
    </>
  )
}

export default MobileMenu;