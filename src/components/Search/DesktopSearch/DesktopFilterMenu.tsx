import PriceButton from './DropdownButtons/PriceButton';
import AmenityButton from './DropdownButtons/AmenityButton';
import ServiceButton from './DropdownButtons/ServiceButton';
import EquipmentButton from './DropdownButtons/EquipmentButton';

const DesktopFilterMenu = () => {
  return (
    <div className='desktop-filter-menu'>
      <PriceButton />
      <AmenityButton />
      <ServiceButton />
      <EquipmentButton />
    </div>
  );
};

export default DesktopFilterMenu;
