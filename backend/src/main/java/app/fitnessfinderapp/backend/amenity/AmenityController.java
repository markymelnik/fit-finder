package app.fitnessfinderapp.backend.amenity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

public class AmenityController {
  
  private final AmenityService amenityService;

  @Autowired
  public AmenityController(AmenityService amenityService) {
    this.amenityService = amenityService;
  }

  @GetMapping
  public List<Amenity> getAmenities() {
    return amenityService.getAmenities();
  }
}
