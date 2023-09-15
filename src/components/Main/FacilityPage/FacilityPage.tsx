import FacilityTopDescription from "./Information/TopDescription/FacilityTopDescription";
import FacilityPagePhoto from "./Information/Photo/FacilityPagePhoto";
import FacilityAbout from "./Information/About/FacilityAbout";
import BackButton from "./BackButton/BackButton";
import './_facility-page.scss';
import FacilitySaveSection from "./Information/SaveSection/SaveSection";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const FacilityPage = () => {

  const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn);

  return (
    <main className="facility-page-container">
      <FacilityTopDescription />
      <FacilityPagePhoto />
      <FacilitySaveSection />
      <FacilityAbout />
      <BackButton />
    </main>
  )
}

export default FacilityPage;