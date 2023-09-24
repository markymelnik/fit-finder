import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import './_account-page.scss';
import { useState } from 'react';
import DetailsTab from './Tabs/DetailsTab/DetailsTab';
import FavoritesTab from './Tabs/FavoritesTab/FavoritesTab';
import MobileSwitchBar from './MobileSwitchBar/MobileSwitchBar';
import DesktopLeftBar from './DesktopLeftBar/DesktopLeftBar';
import AccountPhoto from '../../common/AccountPhoto';

const AccountPage = () => {

  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);
  const [activeTab, setActiveTab] = useState<string>('details');

  return (
    <div className='account-page-container'>
      <div className="account-page-header">My Account</div>
      {
        isMobile && 
        <div className="account-page-photo">
          <AccountPhoto customClass='photo-container'/>
        </div>
      }
      <div className="account-page-body">
        {isMobile 
          ? <MobileSwitchBar activeTab={activeTab} setActiveTab={setActiveTab}/> 
          : <DesktopLeftBar activeTab={activeTab} setActiveTab={setActiveTab} />
        }
        <div className='account-page-rightbar'>
          {activeTab === 'details' && (
            <DetailsTab />
          )}
          {activeTab === 'favorites' && (
            <FavoritesTab />
          )}  
        </div>
      </div>
    </div>
  );
}

export default AccountPage;