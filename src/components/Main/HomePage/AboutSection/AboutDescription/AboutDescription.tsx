import ToSearchButton from '../ToSearchButton/ToSearchButton';
import "./_about-description.scss";

const AboutDescription = () => {
  return (
    <div className="about-description">
      <h4 className="about-description-title">An easy way to search</h4>
      <p className="about-description-text">
        {`Find your perfect gym or workout spot using our intuitive site.
          Search by keywords including location name, location address, neighborhood, and ZIP code.
          Refine your search with filters like type, amenities, and offerings to find exactly what you're looking for.
          Explore locations using our interactive street map tool. Happy fitness journey!`}
      </p>
      <ToSearchButton />
    </div>
  );
};

export default AboutDescription;