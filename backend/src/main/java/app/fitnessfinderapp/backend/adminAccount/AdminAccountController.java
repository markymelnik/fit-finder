package app.fitnessfinderapp.backend.adminAccount;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminAccountController {
  
  @GetMapping("/")
  public String adminLevelAccess() {
    return "Accessing admin level";
  }
}
