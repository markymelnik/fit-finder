package app.fitnessfinderapp.backend.facility;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
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

  public Facility getFacilityById(Long facilityId) {
    return facilityRepository.findById(facilityId).orElse(null);
  }

  public Page<Facility> getFacilitiesByParameters(String enteredKeyword, Set<String> facilityTypes, Set<String> amenities, Set<String> offerings, Pageable pageable) {
    Specification<Facility> spec = Specification
        .where(FacilitySpecifications.hasKeyword(enteredKeyword))
        .and(FacilitySpecifications.hasFacilityTypes(facilityTypes))
        .and(FacilitySpecifications.hasAmenitiesOrOfferings(amenities, offerings));

    return facilityRepository.findAll(spec, pageable);
  }

  public List<Facility> getFacilitiesByParameters(String enteredKeyword, Set<String> facilityTypes, Set<String> amenities, Set<String> offerings) {
    Specification<Facility> spec = Specification
        .where(FacilitySpecifications.hasKeyword(enteredKeyword))
        .and(FacilitySpecifications.hasFacilityTypes(facilityTypes))
        .and(FacilitySpecifications.hasAmenitiesOrOfferings(amenities, offerings));

    return facilityRepository.findAll(spec);
  }

  public Set<Facility> getRandomFacilities() {
    int totalFacilities = facilityRepository.findAll().size();
    Set<Long> randomIds = new HashSet<>();
    Set<Facility> randomFacilities = new HashSet<>();

    while (randomFacilities.size() < 8) {
      long randomId = 1 + (long)(Math.random() * totalFacilities);

      if (!randomIds.contains(randomId)) {
        randomIds.add(randomId);
        Optional<Facility> facility = facilityRepository.findById(randomId);

        facility.ifPresent(randomFacilities::add);
      }
    }
    return randomFacilities;
  }

  public void addNewFacility(Facility facility) {
    facilityRepository.save(facility);
  }

  public void deleteFacility(Long facilityId) {
    facilityRepository.deleteById(facilityId);
  }
}
