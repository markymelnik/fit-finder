package app.fitnessfinderapp.backend.amenity;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/amenities")
public class AmenityController {
  
  private final AmenityService amenityService;

  @Autowired
  public AmenityController(AmenityService amenityService) {
    this.amenityService = amenityService;
  }

  @GetMapping
  public Set<Amenity> getAmenities() {
    return amenityService.getAllAmenities();
  }
}