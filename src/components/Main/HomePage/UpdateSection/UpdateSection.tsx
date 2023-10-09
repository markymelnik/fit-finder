import GymSVG from "./GymSVG";
import OutdoorParkSVG from "./OutdoorParkSVG";
import PhoneSVG from "./phoneSVG";
import "./_update-section.scss";

const UpdateSection = () => {
  return (
    <div className="update-section-container">
      <div className="update-section-title">Recent Additions</div>
      <div className="updates-container">
        <div className="update-box box-1">
          <div className="update-box-title">Fully Responsive</div>
          <p className="update-box-description">
            Experience seamless browsing across phones, tablets, and computers.
            Find a location effortlessly on any device!
          </p>
          <div className="box-1-icon">
            <PhoneSVG />
          </div>
        </div>
        <div className="update-box box-2">
          <div className="update-box-title">Outdoor Fitness Areas in NYC</div>
          <p className="update-box-description">
            Explore 123 newly-added outdoor fitness areas across all 5 boroughs.
            Nestled in New York City public parks, these fitness zones feature
            equipment such as pull up bars, parallel bars, incline benches, and
            more. Enjoy free acesss and pinpoint their exact location using our
            interactive map!
          </p>
          <div className="box-2-icon">
            <OutdoorParkSVG />
          </div>
        </div>
        <div className="update-box box-3">
          <div className="update-box-title">Brooklyn Facilities</div>
          <p className="update-box-description">
            Discover over 250 newly-added fitness destination in Brooklyn - from
            traditional gyms and martial arts centers to specialized boutique
            studios. Tailor your search with specific amenities and offerings to
            find a location that suits your needs!
          </p>
          <div className="box-3-icon">
            <GymSVG />
          </div>
        </div>
        {/* <div className="updates-vertical-line">
          <div className="line"></div>
        </div> */}
      </div>
    </div>
  );
};

export default UpdateSection;