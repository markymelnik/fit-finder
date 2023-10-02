package app.fitnessfinderapp.backend.facilityType;

import java.util.LinkedHashSet;
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
    return new LinkedHashSet<>(facilityTypeRepository.findAllByOrderByIdAsc());
  }

  public Set<FacilityType> getFacilityTypeByFacilityId(Long facilityId) {
    return new LinkedHashSet<>(facilityTypeRepository.getFacilityTypeByFacilityId(facilityId));
  }

}