package app.fitnessfinderapp.backend.amenity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AmenityRepository
  extends JpaRepository<Amenity, Long> {

  List<Amenity> findAllByOrderByIdAsc();

  @Query("SELECT a FROM Amenity a JOIN a.facilities facility WHERE facility.id = :facilityId")
  List<Amenity> getAmenitiesByFacilityId(@Param("facilityId") Long facilityId);
  }
