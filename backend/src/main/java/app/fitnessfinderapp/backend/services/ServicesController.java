package app.fitnessfinderapp.backend.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/services")
public class ServicesController {
  
  private final ServicesService servicesService;

  @Autowired
  public ServicesController(ServicesService servicesService) {
    this.servicesService = servicesService;
  }

  @GetMapping
  public Set<Services> getServices() {
    return servicesService.getAllServices();
  }
}
