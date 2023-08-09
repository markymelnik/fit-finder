package app.fitnessfinderapp.backend.facility;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityRepository
    extends JpaRepository<Facility, Long> {

  @Query("SELECT f FROM Facility f WHERE " +
      "lower(f.name) LIKE lower(concat('%', :keyword, '%')) OR " +
      "lower(f.address) LIKE lower(concat('%', :keyword, '%')) OR " +
      "lower(f.neighborhood) LIKE lower(concat('%', :keyword, '%')) OR " +
      "lower(f.type) LIKE lower(concat('%', :keyword, '%')) OR " +
      "f.postal_code = :keyword")
  List<Facility> searchByKeyword(@Param("keyword") String keyword);

  @Query("SELECT f FROM Facility f JOIN f.amenities a WHERE a.name IN :amenities GROUP BY f HAVING COUNT(DISTINCT a.name) = :amenityCount")
  List<Facility> findByAllAmenities(@Param("amenities") List<String> amenities, @Param("amenityCount") Long amenityCount);

}