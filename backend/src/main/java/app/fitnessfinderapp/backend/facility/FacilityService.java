package app.fitnessfinderapp.backend.facility;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FacilityService {
  
  private final FacilityRepository facilityRepository;

  @Autowired
  public FacilityService(FacilityRepository facilityRepository) {
    this.facilityRepository = facilityRepository;
  }

  public List<Facility> getFacilities() {
    return facilityRepository.findAll();
  }

  public List<Facility> searchFacilitiesByKeyword(String keyword) {
    return facilityRepository.searchByKeyword(keyword);
  }

  public List<Facility> searchFacilitiesByAmenities(List<String> amenities) {
    return facilityRepository.findByAllAmenities(amenities, (long) amenities.size());
  }

  public void addNewFacility(Facility facility) {
    facilityRepository.save(facility);
  }

  public void deleteFacility(Long facilityId) {
    facilityRepository.deleteById(facilityId);
  }
}
