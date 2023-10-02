package app.fitnessfinderapp.backend.offering;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferingRepository 
  extends JpaRepository<Offering, Long> {
  
  List<Offering> findAllByOrderByIdAsc();

  @Query("SELECT o FROM Offering o JOIN o.facilities facility WHERE facility.id = :facilityId")
  List<Offering> getOfferingsByFacilityId(@Param("facilityId") Long facilityId);
  }
