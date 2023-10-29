import { useState } from 'react';

import { useSelector } from 'react-redux';

import DesktopLeftBar from './DesktopLeftBar/DesktopLeftBar';
import MobileSwitchBar from './MobileSwitchBar/MobileSwitchBar';
import DetailsTab from './Tabs/DetailsTab/DetailsTab';
import FavoritesTab from './Tabs/FavoritesTab/FavoritesTab';
import { RootState } from '../../../redux/store';
import AccountPhoto from '../../common/AccountPhoto';
import './_account-page.scss';

const AccountPage = () => {

  const isMobile = useSelector((state: RootState) => state.viewport.isMobile);
  const [activeTab, setActiveTab] = useState<string>('details');

  return (
    <main className='account-page-container'>
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
    </main>
  );
}

export default AccountPage;