package app.fitnessfinderapp.backend.facilityType;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityTypeRepository 
  extends JpaRepository<FacilityType, Long>{

  @Query("SELECT t FROM FacilityType t JOIN t.facilities f WHERE f.id = :facilityId")
  Set<FacilityType> getFacilityTypeByFacilityId(@Param("facilityId") Long facilityId);
  }
