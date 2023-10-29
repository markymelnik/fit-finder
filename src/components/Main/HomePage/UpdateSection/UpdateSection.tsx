import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import GymSVG from "../../../../assets/svg/update_box/GymSVG";
import OutdoorParkSVG from "../../../../assets/svg/update_box/OutdoorParkSVG";
import PhoneSVG from "../../../../assets/svg/update_box/PhoneSVG";
import { setEnteredKeyword, setSelectedFacilityTypes } from "../../../../redux/slices/filterSlice";
import { AppDispatch } from "../../../../redux/store";
import "./_update-section.scss";

const UpdateSection = () => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleBrooklynSearchLinkClick = () => {
    dispatch(setEnteredKeyword("Brooklyn"));
    navigate('search');
  };  

  const handleOutdoorFitnessAreaLinkClick = () => {
    dispatch(setSelectedFacilityTypes(["Outdoor Workout Area"]));
    navigate('search');
  }

  return (
    <section className="update-section-container">
      <div className="update-section-top">
        <h2 className="update-section-title">Recent Additions</h2>
        <h3 className="update-section-subtitle">{`See what's new!`}</h3>
      </div>
      <div className="updates-container">
        <div className="update-box box-1">
          <div className="update-box-top">
          <h4 className="update-box-title">Fully Responsive</h4>
          <p className="update-box-description">
            Our site is designed with ease of use in mind. Experience seamless
            browsing across phones, tablets, and computers. Find a location
            effortlessly on any device!
          </p>
          </div>
          <div className="box-1-icon">
            <PhoneSVG />
          </div>
        </div>
        <div className="update-box box-2">
          <div className="update-box-top">
          <h4 className="update-box-title">Outdoor Fitness Areas</h4>
          <p className="update-box-description">
            Explore 123 newly-added outdoor fitness areas across all 5 boroughs.
            Situated within New York City public parks, these fitness zones are
            free to use. They feature equipment such as pull up bars, parallel
            bars, incline benches, and more. Use our interactive map to pinpoint
            their exact location!
          </p>
          </div>
          
          <div className="outdoor-fitness-area-search-link">
            <span onClick={handleOutdoorFitnessAreaLinkClick}>
              Search Outdoor Fitness Areas
            </span>
          </div>
          <div className="box-2-icon">
            <OutdoorParkSVG />
          </div>
        </div>
        <div className="update-box box-3">
          <div className="update-box-top">
          <h4 className="update-box-title">Brooklyn Facilities</h4>
          <p className="update-box-description">
            Discover over 250 newly-added fitness destinations in Brooklyn -
            from traditional gyms and martial arts centers to specialized
            boutique studios. Tailor your search with specific amenities and
            offerings to find a location that suits your needs!
          </p>
          </div>
          
          <div className="brooklyn-search-link">
            <span onClick={handleBrooklynSearchLinkClick}>
              Search Brooklyn Locations
            </span>
          </div>
          <div className="box-3-icon">
            <GymSVG />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateSection;