package app.fitnessfinderapp.backend.facility;

import java.util.ArrayList;
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

  public List<Facility> searchFacilities(String keyword, List<String> amenities) {

    List<String> amenityList = null;
    Long amenityCount = null;

    if (keyword != null && !keyword.trim().isEmpty()) {
      keyword = keyword.trim();
    } else {
      keyword = null;
    }

    if (amenities != null) {
      amenityList = amenities;
    } else {
      amenityList = new ArrayList<>();
    }

    if (!amenityList.isEmpty()) {
      amenityCount = (long) amenityList.size();
    }

    if (keyword == null && amenityCount == null) {
      return facilityRepository.findAll();
    }

    return facilityRepository.findFacilitiesByKeywordAndAmenities(keyword, amenityList, amenityCount);
  }

  public void addNewFacility(Facility facility) {
    facilityRepository.save(facility);
  }

  public void deleteFacility(Long facilityId) {
    facilityRepository.deleteById(facilityId);
  }
}
