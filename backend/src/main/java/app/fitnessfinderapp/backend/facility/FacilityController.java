package app.fitnessfinderapp.backend.facility;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
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
import app.fitnessfinderapp.backend.neighborhood.Neighborhood;
import app.fitnessfinderapp.backend.neighborhood.NeighborhoodService;
import app.fitnessfinderapp.backend.services.Services;
import app.fitnessfinderapp.backend.services.ServicesService;

@RestController
@RequestMapping(path = "api/facility")
public class FacilityController {

  private final FacilityService facilityService;
  private final FacilityTypeService facilityTypeService;
  private final NeighborhoodService neighborhoodService;
  private final AmenityService amenityService;
  private final ServicesService servicesService;

  @Autowired
  public FacilityController(FacilityService facilityService, FacilityTypeService facilityTypeService, NeighborhoodService neighborhoodService, AmenityService amenityService, ServicesService servicesService) {
    this.facilityService = facilityService;
    this.facilityTypeService = facilityTypeService;
    this.neighborhoodService = neighborhoodService;
    this.amenityService = amenityService;
    this.servicesService = servicesService;
  }

  @GetMapping("/search")
  public Set<Facility> getFacilitiesByParameters(
      @RequestParam(required = false) String enteredKeyword,
      @RequestParam(required = false) Set<String> facilityTypes,
      @RequestParam(required = false) Set<String> amenities,
      @RequestParam(required = false) Set<String> services) {
        
      return facilityService.getFacilitiesByParameters(enteredKeyword, facilityTypes, amenities, services);
  }

  @GetMapping
  public Set<Facility> getFacilities() {
    return facilityService.getFacilities();
  }

  @GetMapping("/{facilityId}/type")
  public Set<FacilityType> getFacilityTypeByFacilityId(@PathVariable Long facilityId) {
    return facilityTypeService.getFacilityTypeByFacilityId(facilityId);
  }

  @GetMapping("/{facilityId}/neighborhood")
  public Set<Neighborhood> getNeighborhoodByFacilityId(@PathVariable Long facilityId) {
    return neighborhoodService.getNeighborhoodByFacilityId(facilityId);
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
