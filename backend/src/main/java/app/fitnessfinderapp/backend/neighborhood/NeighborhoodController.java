package app.fitnessfinderapp.backend.neighborhood;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/neighborhoods")
public class NeighborhoodController {
  
  private final NeighborhoodService neighborhoodService;

  @Autowired
  public NeighborhoodController(NeighborhoodService neighborhoodService) {
    this.neighborhoodService = neighborhoodService;
  }

  @GetMapping
  public Set<Neighborhood> getAllNeighborhoods() {
    return neighborhoodService.getAllNeighborhoods();
  }
  
}
