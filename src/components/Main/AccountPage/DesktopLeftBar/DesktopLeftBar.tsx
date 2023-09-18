import './_desktop-left-bar.scss';
import DetailsIcon from '../../../../assets/icons/account/details-icon.png';
import FavoritesIcon from '../../../../assets/icons/account/favorites-icon.png';
import LogoutButton from '../../../Header/Mobile/MobileMenu/LogoutButton/LogoutButton';

type DesktopLeftBarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const DesktopLeftBar = ({ activeTab, setActiveTab }: DesktopLeftBarProps) => {

  return (
    <div className="account-page-leftbar">
      <div className="account-page-leftbar-top">
        <div
          className={`leftbar-tab ${activeTab === "details" ? "active" : ""}`}
          onClick={() => setActiveTab("details")}
        >
          <img className="leftbar-tab-icon" src={DetailsIcon} />
          <div className="details-btn">Details</div>
        </div>
        <div
          className={`leftbar-tab ${activeTab === "favorites" ? "active" : ""}`}
          onClick={() => setActiveTab("favorites")}
        >
          <img className="leftbar-tab-icon" src={FavoritesIcon} />
          <div className="favorites-btn">Favorites</div>
        </div>
      </div>
      <div className="account-page-leftbar-bottom">
        <LogoutButton customClass="leftbar-logout-btn"/>
      </div>
    </div>
  );
}

export default DesktopLeftBar;