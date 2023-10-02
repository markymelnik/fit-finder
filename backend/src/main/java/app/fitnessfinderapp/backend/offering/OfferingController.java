package app.fitnessfinderapp.backend.offering;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/offerings")
public class OfferingController {
  
  private final OfferingService offeringService;

  @Autowired
  public OfferingController(OfferingService offeringService) {
    this.offeringService = offeringService;
  }

  @GetMapping
  public Set<Offering> getOfferings() {
    return offeringService.getAllOfferings();
  }
}
