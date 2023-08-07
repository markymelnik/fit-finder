package app.fitnessfinderapp.backend.amenity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AmenityService {
  
  private final AmenityRepository amenityRepository;

  @Autowired
  public AmenityService(AmenityRepository amenityRepository) {
    this.amenityRepository = amenityRepository;
  }

  public List<Amenity> getAmenities() {
    return amenityRepository.findAll();
  }
}
