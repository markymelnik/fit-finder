package app.fitnessfinderapp.backend.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.fitnessfinderapp.backend.DTO.LoginResponseDTO;
import app.fitnessfinderapp.backend.DTO.RegistrationDTO;
import app.fitnessfinderapp.backend.userAccount.UserAccount;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
  
  @Autowired
  private AuthenticationService authenticationService;

  @PostMapping("/register")
  public UserAccount registerUser(@RequestBody RegistrationDTO body) {
    return authenticationService.registerUser(body.getUsername(), body.getPassword());
  }

  @PostMapping("/login")
  public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body) {
    return authenticationService.loginUser(body.getUsername(), body.getPassword());
  }
  
}
