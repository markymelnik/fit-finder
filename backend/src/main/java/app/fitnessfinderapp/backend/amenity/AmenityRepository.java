package app.fitnessfinderapp.backend.amenity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AmenityRepository
  extends JpaRepository<Amenity, Long> {

  }
