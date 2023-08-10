package app.fitnessfinderapp.backend.facilityType;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class FacilityTypeService {

  private final FacilityTypeRepository facilityTypeRepository;

  public FacilityTypeService(FacilityTypeRepository facilityTypeRepository) {
    this.facilityTypeRepository = facilityTypeRepository;
  }

  public List<FacilityType> getAllFacilityTypes() {
    return facilityTypeRepository.findAll();
  }
}