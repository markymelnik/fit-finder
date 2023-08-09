package app.fitnessfinderapp.backend.facility;

import java.util.List;
import java.util.Set;

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

import app.fitnessfinderapp.backend.amenity.Amenity;
import app.fitnessfinderapp.backend.amenity.AmenityService;

@RestController
@RequestMapping(path = "api/facility")
@CrossOrigin(origins = "http://localhost:5173")
public class FacilityController {

  private final FacilityService facilityService;
  private final AmenityService amenityService;

  @Autowired
  public FacilityController(FacilityService facilityService, AmenityService amenityService) {
    this.facilityService = facilityService;
    this.amenityService = amenityService;
  }

  @GetMapping
  public List<Facility> getFacilities() {
    return facilityService.getFacilities();
  }

  @GetMapping("/search")
  public List<Facility> searchFacilities(
      @RequestParam(required = false) String keyword,
      @RequestParam(required = false) List<String> amenities) {
    return facilityService.searchFacilities(keyword, amenities);
  }

  @GetMapping("/{facilityId}/amenities")
  public Set<Amenity> getAmenitiesByFacilityId(@PathVariable Long facilityId) {
    return amenityService.getAmenitiesByFacilityId(facilityId);
  }

  @PostMapping
  public void addNewFacility(@RequestBody Facility facility) {
    facilityService.addNewFacility(facility);
  }

  @DeleteMapping(path = "{facilityId}")
  public void deleteFacility(@PathVariable("facilityId") Long facilityId) {
    facilityService.deleteFacility(facilityId);
  }
}
