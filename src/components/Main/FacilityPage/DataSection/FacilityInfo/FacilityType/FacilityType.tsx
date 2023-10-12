import { useSelector } from "react-redux";

import ClimbingGymSVG from "./ClimbingGymSVG";
import FitnessStudioSVG from "./FitnessStudioSVG";
import HIITCrossFitSVG from "./HIITCrossFitSVG";
import MartialArtsCenterSVG from "./MartialArtsCenterSVG";
import OutdoorWorkoutAreaSVG from "./OutdoorWorkoutAreaSVG";
import PilatesStudioSVG from "./PilatesStudioSVG";
import RecreationCenterSVG from "./RecreationCenterSVG";
import TraditionalGymSVG from "./TraditionalGymSVG";
import YogaStudioSVG from "./YogaStudioSVG";
import CheckmarkIcon from "../../../../.././../assets/icons/checkmark-icon.png";
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
      typeIcon = CheckmarkIcon;
  }

  return (
    <div className="facility-type-container">
      <div className="facility-type-icon">{typeIcon}</div>
      <div className="facility-type">{selectedFacility.facilityType.name}</div>
    </div>
  );
};

export default FacilityType;
