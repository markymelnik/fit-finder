package app.fitnessfinderapp.backend.borough;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/boroughs")
public class BoroughController {
  
  private final BoroughService boroughService;

  @Autowired
  public BoroughController(BoroughService boroughService) {
    this.boroughService = boroughService;
  }

  @GetMapping
  public Set<Borough> getAllBoroughs() {
    return boroughService.getAllBoroughs();
  }
  
}
