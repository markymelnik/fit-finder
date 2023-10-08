package app.fitnessfinderapp.backend.facility;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class FacilityService {

  private final FacilityRepository facilityRepository;

  @Autowired
  public FacilityService(FacilityRepository facilityRepository) {
    this.facilityRepository = facilityRepository;
  }

  public Set<Facility> getFacilities() {
    return new HashSet<>(facilityRepository.findAll());
  }  

  public Page<Facility> getFacilitiesByParameters(String enteredKeyword, Set<String> facilityTypes, Set<String> amenities, Set<String> offerings, Pageable pageable) {
    Specification<Facility> spec = Specification
        .where(FacilitySpecifications.hasKeyword(enteredKeyword))
        .and(FacilitySpecifications.hasFacilityTypes(facilityTypes))
        .and(FacilitySpecifications.hasAmenities(amenities))
        .and(FacilitySpecifications.hasOfferings(offerings));

    return facilityRepository.findAll(spec, pageable);
}

  public void addNewFacility(Facility facility) {
    facilityRepository.save(facility);
  }

  public void deleteFacility(Long facilityId) {
    facilityRepository.deleteById(facilityId);
  }
}