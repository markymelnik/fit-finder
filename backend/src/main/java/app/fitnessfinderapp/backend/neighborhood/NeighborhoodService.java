package app.fitnessfinderapp.backend.neighborhood;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NeighborhoodService {
  private final NeighborhoodRepository neighborhoodRepository;

  @Autowired
  public NeighborhoodService(NeighborhoodRepository neighborhoodRepository) {
    this.neighborhoodRepository = neighborhoodRepository;
  }

  public Set<Neighborhood> getAllNeighborhoods() {
    return new HashSet<>(neighborhoodRepository.findAll());
  }

  public Set<Neighborhood> getNeighborhoodByFacilityId(Long facilityId) {
    return neighborhoodRepository.getNeighborhoodByFacilityId(facilityId);
  }
  
}
