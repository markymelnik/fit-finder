import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BackButton from "./BackButton/BackButton";
import DataSection from "./DataSection/DataSection";
import FacilityName from "./FacilityName/FacilityName";
import PhotoSection from "./PhotoSection/PhotoSection";
import { fetchFacilityByFacilityId } from "../../../redux/apiRequests";
import { RootState } from "../../../redux/store";
import "./_facility-page.scss";

const FacilityPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedFacility = useSelector((state: RootState) => state.selectedFacility.facilityData);

  useEffect(() => {
    if (!selectedFacility) {
      fetchFacilityByFacilityId(Number(id), dispatch)();
    }
  }, [id, dispatch]);

  return (
    <main className="facility-page-container">
      <BackButton />
      <FacilityName />
      <PhotoSection />
      <DataSection />
    </main>
  );
};

export default FacilityPage;
