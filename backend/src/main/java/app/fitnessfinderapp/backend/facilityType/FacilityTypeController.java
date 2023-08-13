package app.fitnessfinderapp.backend.facilityType;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/types")
@CrossOrigin(origins="http://localhost:5173")
public class FacilityTypeController {

  private final FacilityTypeService facilityTypeService;

  @Autowired
  public FacilityTypeController(FacilityTypeService facilityTypeService) {
    this.facilityTypeService = facilityTypeService;
  }

  @GetMapping
  public List<FacilityType> getFacilityTypes() {
    return facilityTypeService.getAllFacilityTypes();
  }
}
