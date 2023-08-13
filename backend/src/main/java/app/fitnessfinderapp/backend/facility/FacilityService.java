package app.fitnessfinderapp.backend.facility;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
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

  public Set<Facility> getFacilitiesByParameters(String enteredKeyword, Set<String> facilityTypes, Set<String> amenities, Set<String> services) {

    if (
    (enteredKeyword == null || enteredKeyword.isEmpty()) && 
    (facilityTypes == null || facilityTypes.isEmpty()) && 
    (amenities == null || amenities.isEmpty()) && 
    (services == null || services.isEmpty())
  ) {
  return new HashSet<>(facilityRepository.findAll());
}

    Set<String> typeList = null;
    
    if (facilityTypes != null) {
      typeList = facilityTypes;
    } else {
      typeList = new HashSet<>();
    }

    Set<String> amenityList = null;
    Long amenityCount = null;

    if (amenities != null) {
      amenityList = amenities;
    } else {
      amenityList = new HashSet<>();
    }

    if (!amenityList.isEmpty()) {
      amenityCount = (long) amenityList.size();
    }

    Set<String> serviceList = null;
    Long serviceCount = null;

    if (services != null) {
      serviceList = services;
    } else {
      serviceList = new HashSet<>();
    }

    if(!serviceList.isEmpty()) {
      serviceCount = (long) serviceList.size();
    }

    return facilityRepository.findFacilitiesByParameters(enteredKeyword, typeList, amenityList, amenityCount, serviceList, serviceCount);
  }

  public void addNewFacility(Facility facility) {
    facilityRepository.save(facility);
  }

  public void deleteFacility(Long facilityId) {
    facilityRepository.deleteById(facilityId);
  }
}
