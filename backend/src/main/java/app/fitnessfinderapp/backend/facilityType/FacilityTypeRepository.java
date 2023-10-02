package app.fitnessfinderapp.backend.facilityType;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityTypeRepository 
  extends JpaRepository<FacilityType, Long>{

  List<FacilityType> findAllByOrderByIdAsc();

  @Query("SELECT t FROM FacilityType t JOIN t.facilities f WHERE f.id = :facilityId")
  List<FacilityType> getFacilityTypeByFacilityId(@Param("facilityId") Long facilityId);
  }
