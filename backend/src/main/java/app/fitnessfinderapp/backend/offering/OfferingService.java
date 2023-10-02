package app.fitnessfinderapp.backend.offering;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OfferingService {
  
  private final OfferingRepository offeringRepository;

  @Autowired
  public OfferingService(OfferingRepository offeringRepository) {
    this.offeringRepository = offeringRepository;
  }

  public Set<Offering> getAllOfferings() {
    return new LinkedHashSet<>(offeringRepository.findAllByOrderByIdAsc());
  }

  public Set<Offering> getOfferingsByFacilityId(Long facilityId) {
    return new LinkedHashSet<>(offeringRepository.getOfferingsByFacilityId(facilityId));
  }
}
