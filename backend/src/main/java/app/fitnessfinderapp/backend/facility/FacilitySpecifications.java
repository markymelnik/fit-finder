package app.fitnessfinderapp.backend.facility;

import java.util.Set;

import org.springframework.data.jpa.domain.Specification;

import app.fitnessfinderapp.backend.amenity.Amenity;
import app.fitnessfinderapp.backend.services.Services;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;

public class FacilitySpecifications {
 
  public static Specification<Facility> hasKeyword(String keyword) {
    return (facility, cq, cb) -> {
      if (keyword == null || keyword.trim().isEmpty()) {
        return null;
      }

      Predicate namePredicate = cb.like(cb.lower(facility.get("name")), "%" + keyword.toLowerCase() + "%");
      Predicate addressPredicate = cb.like(cb.lower(facility.get("address")), "%" + keyword.toLowerCase() + "%");
      Predicate neighborhoodPredicate = cb.like(cb.lower(facility.get("neighborhood")), "%" + keyword.toLowerCase() + "%");
      Predicate facilityTypePredicate = cb.like(cb.lower(facility.join("facilityType").get("name")), "%" + keyword.toLowerCase() + "%");
      Predicate postalCodePredicate = cb.equal(facility.get("postalCode"), keyword);
      return cb.or(namePredicate, addressPredicate, neighborhoodPredicate, facilityTypePredicate, postalCodePredicate);
    };
  }

  public static Specification<Facility> hasFacilityTypes(Set<String> types) {
    return (facility, cq, cb) -> {
      if (types == null || types.isEmpty()) {
        return null;
      }
      return facility.join("facilityType").get("name").in(types);
    };
  }

  public static Specification<Facility> hasAmenities(Set<String> amenities) {
    return (facility, cq, cb) -> {
      if (amenities == null || amenities.isEmpty()) {
        return null;
      }
      Join<Facility, Amenity> join = facility.join("amenities");
      return cb.and(join.get("name").in(amenities));
    };
  }

  public static Specification<Facility> hasServices(Set<String> services) {
    return (facility, cq, cb) -> {
      if (services == null || services.isEmpty()) {
        return null;
      }
      Join<Facility, Services> join = facility.join("services");
      return cb.and(join.get("name").in(services));
    };
  }


}


