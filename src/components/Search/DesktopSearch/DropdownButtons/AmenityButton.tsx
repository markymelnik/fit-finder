import Dropdown from "./Dropdown";

const AmenityButton = () => {

  const amenities = ['Locker Rooms', 'Showers', 'Sauna'];

  return (
    <Dropdown
      customClass='amenity'
      buttonName='Amenities'
      options={amenities}
      onOptionSelected={(selected) => {
        console.log(`Selected amenity: ${selected}`);
      }}
    />
  );
};

export default AmenityButton;
