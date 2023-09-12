import './_mobile-switchbar.scss';

type MobileSwitchBarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MobileSwitchBar = ({ activeTab, setActiveTab }: MobileSwitchBarProps) => {
  return (
    <div className="mobile-switchbar">
      <div 
        className={`mobile-switchbar-tab ${activeTab === 'details' ? 'active' : ''}`}
        onClick={() => setActiveTab('details')}
      >
        Details
      </div>
      <div 
        className={`mobile-switchbar-tab ${activeTab === 'favorites' ? 'active' : ''}`}
        onClick={() => setActiveTab('favorites')}
      >
        Favorites
      </div> 
    </div>
  )
}

export default MobileSwitchBar;