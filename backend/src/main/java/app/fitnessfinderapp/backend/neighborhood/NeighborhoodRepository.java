package app.fitnessfinderapp.backend.neighborhood;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NeighborhoodRepository 
  extends JpaRepository<Neighborhood, Long>{

  @Query("SELECT n FROM Neighborhood n JOIN n.facilities f WHERE f.id = :neighborhoodId")
  Set<Neighborhood> getNeighborhoodByFacilityId(@Param("neighborhoodId") Long neighborhoodId);
  
}
