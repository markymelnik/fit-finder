package app.fitnessfinderapp.backend.services;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicesService {
  
  private final ServicesRepository servicesRepository;

  @Autowired
  public ServicesService(ServicesRepository servicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  public Set<Services> getAllServices() {
    return new LinkedHashSet<>(servicesRepository.findAllByOrderByIdAsc());
  }

  public Set<Services> getServicesByFacilityId(Long facilityId) {
    return new LinkedHashSet<>(servicesRepository.getServicesByFacilityId(facilityId));
  }
}
