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
import app.fitnessfinderapp.backend.facilityType.FacilityType;
import app.fitnessfinderapp.backend.facilityType.FacilityTypeService;
import app.fitnessfinderapp.backend.services.Services;
import app.fitnessfinderapp.backend.services.ServicesService;

@RestController
@RequestMapping(path = "api/facility")
@CrossOrigin(origins = "http://localhost:5173")
public class FacilityController {

  private final FacilityService facilityService;
  private final FacilityTypeService facilityTypeService;
  private final AmenityService amenityService;
  private final ServicesService servicesService;

  @Autowired
  public FacilityController(FacilityService facilityService, FacilityTypeService facilityTypeService, AmenityService amenityService, ServicesService servicesService) {
    this.facilityService = facilityService;
    this.facilityTypeService = facilityTypeService;
    this.amenityService = amenityService;
    this.servicesService = servicesService;
  }

  @GetMapping
  public List<Facility> getFacilities() {
    return facilityService.getFacilities();
  }

  @GetMapping("/search")
  public List<Facility> getFacilitiesByParameters(
      @RequestParam(required = false) String keyword,
      @RequestParam(required = false) List<String> facilityTypes,
      @RequestParam(required = false) List<String> amenities,
      @RequestParam(required = false) List<String> services) {
    return facilityService.getFacilitiesByParameters(keyword, facilityTypes, amenities, services);
  }

  @GetMapping("/{facilityId}/type")
  public List<FacilityType> getFacilityTypeByFacilityId(@PathVariable Long facilityId) {
    return facilityTypeService.getFacilityTypeByFacilityId(facilityId);
  }

  @GetMapping("/{facilityId}/amenities")
  public Set<Amenity> getAmenitiesByFacilityId(@PathVariable Long facilityId) {
    return amenityService.getAmenitiesByFacilityId(facilityId);
  }

  @GetMapping("/{facilityId}/services")
  public Set<Services> getServicesByFacilityId(@PathVariable Long facilityId) {
    return servicesService.getServicesByFacilityId(facilityId);
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
