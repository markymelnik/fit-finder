import { useSelector } from "react-redux";
import './_navigation-bar.scss';
import { RootState } from "../../../redux/store";
import DesktopProfileDropdown from "../Desktop/DesktopProfileDropdown/DesktopProfileDropdown";
import LogInLink from "./LoginButton";

const NavigationBar = () => {

  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  return (
    <div className='navigation-bar'>
      <div className='navigation-links'>
        {isLoggedIn ? <DesktopProfileDropdown/> : <LogInLink />}
      </div>
    </div>
  );
};

export default NavigationBar;
