package app.fitnessfinderapp.backend.facility;

import java.util.Set;

import org.springframework.data.jpa.domain.Specification;

import app.fitnessfinderapp.backend.amenity.Amenity;
import app.fitnessfinderapp.backend.borough.Borough;
import app.fitnessfinderapp.backend.neighborhood.Neighborhood;
import app.fitnessfinderapp.backend.offering.Offering;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Subquery;

public class FacilitySpecifications {
 
  public static Specification<Facility> hasKeyword(String keyword) {
    return (facility, cq, cb) -> {
      if (keyword == null || keyword.trim().isEmpty()) {
        return null;
      }

      Predicate namePredicate = cb.like(cb.lower(facility.get("name")), "%" + keyword.toLowerCase() + "%");
      Predicate addressPredicate = cb.like(cb.lower(facility.get("address")), "%" + keyword.toLowerCase() + "%");
      Predicate facilityTypePredicate = cb.like(cb.lower(facility.join("facilityType").get("name")), "%" + keyword.toLowerCase() + "%");
      Predicate postalCodePredicate = cb.equal(facility.get("postalCode"), keyword);

      Join<Facility, Neighborhood> neighborhoodJoin = facility.join("neighborhood");
      Predicate neighborhoodPredicate = cb.like(cb.lower(neighborhoodJoin.get("name")), "%" + keyword.toLowerCase() + "%");

      Join<Neighborhood, Borough> boroughJoin = neighborhoodJoin.join("borough");
      Predicate boroughPredicate = cb.like(cb.lower(boroughJoin.get("name")), "%" + keyword.toLowerCase() + "%");

      return cb.or(namePredicate, addressPredicate, facilityTypePredicate, postalCodePredicate, neighborhoodPredicate, boroughPredicate);
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

        Subquery<Long> subquery = cq.subquery(Long.class);
        Root<Facility> subRoot = subquery.from(Facility.class);
        Join<Facility, Amenity> subJoin = subRoot.join("amenities");
        subquery.select(subRoot.get("id")).where(subJoin.get("name").in(amenities));

        return cb.in(facility.get("id")).value(subquery);
    };
  }

  public static Specification<Facility> hasOfferings(Set<String> offerings) {
    return (facility, cq, cb) -> {
        if (offerings == null || offerings.isEmpty()) {
            return null;
        }

        Subquery<Long> subquery = cq.subquery(Long.class);
        Root<Facility> subRoot = subquery.from(Facility.class);
        Join<Facility, Offering> subJoin = subRoot.join("offerings");
        subquery.select(subRoot.get("id")).where(subJoin.get("name").in(offerings));

        return cb.in(facility.get("id")).value(subquery);
    };
  }

  public static Specification<Facility> hasAmenitiesOrOfferings(Set<String> amenities, Set<String> offerings) {
    return (facility, cq, cb) -> {
        Predicate amenityPredicate = hasAmenities(amenities).toPredicate(facility, cq, cb);
        Predicate offeringPredicate = hasOfferings(offerings).toPredicate(facility, cq, cb);
        
        if (amenityPredicate == null && offeringPredicate == null) {
            return null;
        } else if (amenityPredicate == null) {
            return offeringPredicate;
        } else if (offeringPredicate == null) {
            return amenityPredicate;
        }
        return cb.or(amenityPredicate, offeringPredicate);
    };
  }
}
