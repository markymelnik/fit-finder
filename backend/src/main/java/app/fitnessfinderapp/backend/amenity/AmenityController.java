package app.fitnessfinderapp.backend.amenity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/amenities")
@CrossOrigin(origins="http://localhost:5173")
public class AmenityController {
  
  private final AmenityService amenityService;

  @Autowired
  public AmenityController(AmenityService amenityService) {
    this.amenityService = amenityService;
  }

  @GetMapping
  public List<Amenity> getAmenities() {
    return amenityService.getAllAmenities();
  }
}