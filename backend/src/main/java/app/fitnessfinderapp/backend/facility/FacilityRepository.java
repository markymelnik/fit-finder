package app.fitnessfinderapp.backend.facility;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityRepository
  extends JpaRepository<Facility, Long> {

    @Query("SELECT f FROM Facility f WHERE lower(f.name) LIKE lower(concat('%', :keyword, '%'))")
    List<Facility> searchByName(@Param("keyword") String keyword);
  }