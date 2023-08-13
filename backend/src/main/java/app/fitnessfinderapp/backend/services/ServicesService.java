package app.fitnessfinderapp.backend.services;

import java.util.HashSet;
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
    return new HashSet<>(servicesRepository.findAll());
  }

  public Set<Services> getServicesByFacilityId(Long facilityId) {
    return servicesRepository.getServicesByFacilityId(facilityId);
  }
}
