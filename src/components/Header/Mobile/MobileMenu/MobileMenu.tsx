import LoginButton from "../../NavigationBar/LoginButton";
import AccountLink from "../../NavigationBar/AccountLink";
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
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const userAccountDetails = useSelector((state: RootState) => state.login.userAccount);
  
  const dispatch = useDispatch<AppDispatch>();

  const closeMobileMenu = () => {
    dispatch(setIsMobileMenuOpen(false));
  }
  
  return (
    <>
      <TintedOverlay isActive={isMobileMenuOpen} onCloseOverlay={closeMobileMenu} />
      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-top">
          <div className="mobile-menu-header">
            <Logo />
            <MobileMenuCloseButton />
          </div>
          {isLoggedIn && userAccountDetails && (
            <div className="mobile-menu-link">
              <AccountLink customClass='account-link' />
            </div>
          )}
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
          {!isLoggedIn && <LoginButton/>}
        </div>
      </div>
    </>
  )
}

export default MobileMenu;