package app.fitnessfinderapp.backend.facilityType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityTypeRepository 
  extends JpaRepository<FacilityType, Long>{


}
