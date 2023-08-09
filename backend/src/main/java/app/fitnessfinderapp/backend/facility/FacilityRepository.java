package app.fitnessfinderapp.backend.facility;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityRepository
    extends JpaRepository<Facility, Long> {

  @Query("SELECT f FROM Facility f " +
      "LEFT JOIN f.amenities a " +
      "WHERE (" +
      ":keyword IS NULL OR " +
      "lower(f.name) LIKE lower(concat('%', :keyword, '%')) OR " +
      "lower(f.address) LIKE lower(concat('%', :keyword, '%')) OR " +
      "lower(f.neighborhood) LIKE lower(concat('%', :keyword, '%')) OR " +
      "lower(f.type) LIKE lower(concat('%', :keyword, '%')) OR " +
      "f.postal_code = :keyword) " +
      "AND (:amenityCount IS NULL OR a.name IN :amenityList) " +
      "GROUP BY f " +
      "HAVING (:amenityCount IS NULL OR COUNT(DISTINCT a.name) = :amenityCount)")
  List<Facility> findFacilitiesByKeywordAndAmenities(
      @Param("keyword") String keyword,
      @Param("amenityList") List<String> amenityList,
      @Param("amenityCount") Long amenityCount);

}