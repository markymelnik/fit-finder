package app.fitnessfinderapp.backend.services;

import java.util.List;
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

  public List<Services> getAllServices() {
    return servicesRepository.findAll();
  }

  public Set<Services> getServicesByFacilityId(Long facilityId) {
    return servicesRepository.getServicesByFacilityId(facilityId);
  }
}
