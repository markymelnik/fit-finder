package app.fitnessfinderapp.backend.amenity;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AmenityService {
  
  private final AmenityRepository amenityRepository;

  @Autowired
  public AmenityService(AmenityRepository amenityRepository) {
    this.amenityRepository = amenityRepository;
  }

  public Set<Amenity> getAllAmenities() {
    return new LinkedHashSet<>(amenityRepository.findAllByOrderByIdAsc());
  }

  public Set<Amenity> getAmenitiesByFacilityId(Long facilityId) {
    return new LinkedHashSet<>(amenityRepository.getAmenitiesByFacilityId(facilityId));
  }
}
