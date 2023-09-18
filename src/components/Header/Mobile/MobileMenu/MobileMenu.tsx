import LogInLink from "../../NavigationBar/NavigationLinks/LogInLink";
import AboutLink from "../../NavigationBar/NavigationLinks/AboutLink";
import BusinessLink from "../../NavigationBar/NavigationLinks/BusinessLink";
import HelpLink from "../../NavigationBar/NavigationLinks/HelpLink";
import AccountLink from "../../NavigationBar/NavigationLinks/AccountLink";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import MobileMenuCloseButton from "../MobileMenuCloseButton/MobileMenuCloseButton";
import './_mobile-menu.scss';
import TintedOverlay from "../../../TintedOverlay/TintedOverlay";
import { useDispatch } from "react-redux";
import { setIsMobileMenuOpen } from "../../../../redux/slices/mobileMenuSlice";
import Logo from "../../Logo/Logo";
import LogoutButton from "./LogoutButton/LogoutButton";


const MobileMenu = () => {

  const isMobileMenuOpen = useSelector((state: RootState) => state.isMobileMenuOpen.isMobileMenuOpen);
  const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);
  const userAccountDetails = useSelector((state: RootState) => state.authentication.userAccount);
  
  const dispatch = useDispatch<AppDispatch>();

  const closeMobileMenu = () => {
    dispatch(setIsMobileMenuOpen(false));
  }
  
  return (
    <>
      <TintedOverlay isActive={isMobileMenuOpen} onCloseOverlay={closeMobileMenu} />
      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <Logo />
          <MobileMenuCloseButton />
        </div>
        <div className="mobile-menu-links">
          <BusinessLink />
          <AboutLink />
          {/* <HelpLink /> */}
          {isLoggedIn &&  <AccountLink />}
        </div>
        {isLoggedIn && userAccountDetails ? (
            <div className='mobile-menu-account-container'>
              <div className="mobile-menu-account-information">
                <div className="mobile-menu-account-name">{userAccountDetails?.username}</div>
                <div className="mobile-menu-account-id">User ID: {userAccountDetails?.id}</div>
              </div>
              <LogoutButton customClass="mobile-menu-logout-btn"/>
            </div>
          ) : (
            <LogInLink />
        )}
      </div>
    </>
  )
}

export default MobileMenu;