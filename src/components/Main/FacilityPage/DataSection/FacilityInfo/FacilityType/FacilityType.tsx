import { useSelector } from "react-redux";

import CheckMarkSVG from "../../../../../../assets/svg/CheckMarkSVG";
import ClimbingGymSVG from "../../../../../../assets/svg/facility_page/ClimbingGymSVG";
import FitnessStudioSVG from "../../../../../../assets/svg/facility_page/FitnessStudioSVG";
import HIITCrossFitSVG from "../../../../../../assets/svg/facility_page/HIITCrossFitSVG";
import MartialArtsCenterSVG from "../../../../../../assets/svg/facility_page/MartialArtsCenterSVG";
import OutdoorWorkoutAreaSVG from "../../../../../../assets/svg/facility_page/OutdoorWorkoutAreaSVG";
import PilatesStudioSVG from "../../../../../../assets/svg/facility_page/PilatesStudioSVG";
import RecreationCenterSVG from "../../../../../../assets/svg/facility_page/RecreationCenterSVG";
import TraditionalGymSVG from "../../../../../../assets/svg/facility_page/TraditionalGymSVG";
import YogaStudioSVG from "../../../../../../assets/svg/facility_page/YogaStudioSVG";
import { RootState } from "../../../../../../redux/store";
import "./_facility-type.scss";

const FacilityType = () => {
  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.facilityData);

  if (!selectedFacility) return;

  let typeIcon;

  switch (selectedFacility.facilityType.id) {
    case 1:
      typeIcon = <OutdoorWorkoutAreaSVG />;
      break;
    case 2:
      typeIcon = <TraditionalGymSVG />;
      break;
    case 3:
      typeIcon = <MartialArtsCenterSVG />;
      break;
    case 4:
      typeIcon = <ClimbingGymSVG />;
      break;
    case 5:
      typeIcon = <YogaStudioSVG />;
      break;
    case 6:
      typeIcon = <PilatesStudioSVG />;
      break;
    case 7:
      typeIcon = <HIITCrossFitSVG />;
      break;
    case 8:
      typeIcon = <RecreationCenterSVG />;
      break;
    case 9:
      typeIcon = <FitnessStudioSVG />;
      break;
    default:
      typeIcon = <CheckMarkSVG />;
  }

  return (
    <div className="facility-type-container">
      <div className="facility-type-icon">{typeIcon}</div>
      <div className="facility-type">{selectedFacility.facilityType.name}</div>
    </div>
  );
};

export default FacilityType;
