import SearchBarComponent from '../../common/SearchBarComponent';
import './_header-searchbar.scss';

type HSearchbarProps = {
  show: boolean;
}

const HSearchbar = ({ show }: HSearchbarProps) => {
  return (
    <SearchBarComponent
      containerClass={`header-searchbar ${show ? `visible` : ``}`}
      submitButtonClass="submit-input-btn-header"
      deleteButtonClass="delete-input-btn-header"
      placeholderText="Enter a name, address, neighborhood, or ZIP code..."
    />
  )
}

export default HSearchbar;