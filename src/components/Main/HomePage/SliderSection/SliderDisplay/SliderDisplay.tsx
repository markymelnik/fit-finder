import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { setSelectedFacility } from "../../../../../redux/slices/selectedFacilitySlice";
import { Facility } from "../../../../../types/types";
import SearchSliderCard from "../SearchSliderCard/SearchSliderCard";
import SliderCard from "../SliderCard/SliderCard";
import "./_slider-display.scss";

const SliderDisplay = ({ sliderRef }: any) => {

  const dispatch = useDispatch();
  const [randomFacilities, setRandomFacilities] = useState<Facility[]>([]);

  const handleCardClick = (facility: Facility) => {
    dispatch(setSelectedFacility(facility));
  }

  const fetchRandomFacilities = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/facility/random`);

      if (!response.ok) {
        throw new Error('Network response was not OK')
      }
      const data = await response.json();
      sessionStorage.setItem('randomFacilities', JSON.stringify(data));
      setRandomFacilities(data);
    } catch (err) {
      console.error('Error fetching random facilities', err);
    }
  };

  useEffect(() => {
    const storedFacilities = sessionStorage.getItem('randomFacilities');

    if (storedFacilities) {
      setRandomFacilities(JSON.parse(storedFacilities))
    } else {
      fetchRandomFacilities();
    }
  }, []);

  return (
    <div className="slider-display">
      <div className="slider-display-cards" ref={sliderRef}>
        {randomFacilities.map((facility, index) => (
          <SliderCard key={index} {...facility} onClick={() => handleCardClick(facility)}/>
        ))}
        <SearchSliderCard />
      </div>
    </div>
  );
};

export default SliderDisplay;
