package app.fitnessfinderapp.backend.services;

import java.util.List;

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
}
