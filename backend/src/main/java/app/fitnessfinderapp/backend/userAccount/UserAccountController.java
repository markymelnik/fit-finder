package app.fitnessfinderapp.backend.userAccount;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserAccountController {
  
  @GetMapping("/")
  public String userLevelAccess() {
    return "Accessing user level";
  }
}
