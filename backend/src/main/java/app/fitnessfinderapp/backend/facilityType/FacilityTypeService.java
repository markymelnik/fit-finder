package app.fitnessfinderapp.backend.facilityType;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FacilityTypeService {

  private final FacilityTypeRepository facilityTypeRepository;

  @Autowired
  public FacilityTypeService(FacilityTypeRepository facilityTypeRepository) {
    this.facilityTypeRepository = facilityTypeRepository;
  }

  public Set<FacilityType> getAllFacilityTypes() {
    return new HashSet<>(facilityTypeRepository.findAll());
  }

  public Set<FacilityType> getFacilityTypeByFacilityId(Long facilityId) {
    return facilityTypeRepository.getFacilityTypeByFacilityId(facilityId);
  }

}