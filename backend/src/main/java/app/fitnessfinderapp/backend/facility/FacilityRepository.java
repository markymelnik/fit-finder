package app.fitnessfinderapp.backend.facility;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityRepository
    extends JpaRepository<Facility, Long> {

  @Query("SELECT f FROM Facility f " +
      "LEFT JOIN f.facilityType t " +
      "LEFT JOIN f.amenities a " +
      "LEFT JOIN f.services s " +
      "WHERE (" +
      ":keyword IS NULL OR " +
      "lower(f.name) LIKE lower(concat('%', :keyword, '%')) OR " +
      "lower(f.address) LIKE lower(concat('%', :keyword, '%')) OR " +
      "lower(f.neighborhood) LIKE lower(concat('%', :keyword, '%')) OR " +
      "lower(t.name) LIKE lower(concat('%', :keyword, '%')) OR " +
      "f.postal_code = :keyword) " +
      "AND (:typeList IS NULL OR t.name IN :typeList) " +
      "AND (:amenityCount IS NULL OR a.name IN :amenityList) " +
      "AND (:serviceCount IS NULL OR s.name IN :serviceList) " +
      "GROUP BY f " +
      "HAVING (:amenityCount IS NULL OR COUNT(DISTINCT a.name) = :amenityCount) " +
      "AND (:serviceCount IS NULL OR COUNT(DISTINCT s.name) = :serviceCount)")
  Set<Facility> findFacilitiesByParameters(
      @Param("keyword") String keyword,
      @Param("typeList") Set<String> typeList,
      @Param("amenityList") Set<String> amenityList,
      @Param("amenityCount") Long amenityCount,
      @Param("serviceList") Set<String> serviceList,
      @Param("serviceCount") Long serviceCount
    );

}