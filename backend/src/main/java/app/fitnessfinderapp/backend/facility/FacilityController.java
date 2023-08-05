package app.fitnessfinderapp.backend.facility;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/facility")
@CrossOrigin(origins="http://localhost:5173")
public class FacilityController {

  private final FacilityService facilityService;

  @Autowired
  public FacilityController(FacilityService facilityService) {
    this.facilityService = facilityService;
  }

  @GetMapping
  public List<Facility> getFacilities() {
    return facilityService.getFacilities();
  }

  @GetMapping("/search")
  public List<Facility> searchFacilitiesByName(@RequestParam String keyword) {
    return facilityService.searchFacilitiesByName(keyword);
  }

  @PostMapping
  public void addNewFacility(@RequestBody Facility facility) {
    facilityService.addNewFacility(facility);
  }

  @DeleteMapping(path = "{facilityId}")
  public void deleteStudent(@PathVariable("facilityId") Long facilityId) {
    facilityService.deleteFacility(facilityId);
  }
}
