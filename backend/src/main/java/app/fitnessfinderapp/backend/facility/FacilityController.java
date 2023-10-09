package app.fitnessfinderapp.backend.facility;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import app.fitnessfinderapp.backend.offering.Offering;
import app.fitnessfinderapp.backend.offering.OfferingService;

@RestController
@RequestMapping(path = "api/facility")
public class FacilityController {

  private final FacilityService facilityService;
  private final FacilityTypeService facilityTypeService;
  private final NeighborhoodService neighborhoodService;
  private final AmenityService amenityService;
  private final OfferingService offeringService;

  @Autowired
  public FacilityController(FacilityService facilityService, FacilityTypeService facilityTypeService, NeighborhoodService neighborhoodService, AmenityService amenityService, OfferingService offeringService) {
    this.facilityService = facilityService;
    this.facilityTypeService = facilityTypeService;
    this.neighborhoodService = neighborhoodService;
    this.amenityService = amenityService;
    this.offeringService = offeringService;
  }

  @GetMapping("/search")
  public Page<Facility> getFacilitiesByParameters(
      @RequestParam(required = false) String enteredKeyword,
      @RequestParam(required = false) Set<String> facilityTypes,
      @RequestParam(required = false) Set<String> amenities,
      @RequestParam(required = false) Set<String> offerings,
      @RequestParam(defaultValue = "0") int page,
      @RequestParam(defaultValue = "12") int size) {

      Pageable pageable = PageRequest.of(page, size);  
      return facilityService.getFacilitiesByParameters(enteredKeyword, facilityTypes, amenities, offerings, pageable);
  }

  @GetMapping("/random")
  public Set<Facility> getRandomFacilities() {
    return facilityService.getRandomFacilities();
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

  @GetMapping("/{facilityId}/offerings")
  public Set<Offering> getOfferingsByFacilityId(@PathVariable Long facilityId) {
    return offeringService.getOfferingsByFacilityId(facilityId);
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