package app.fitnessfinderapp.backend.auth;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import app.fitnessfinderapp.backend.DTO.LoginResponseDTO;
import app.fitnessfinderapp.backend.JWT.TokenService;
import app.fitnessfinderapp.backend.accountRole.AccountRole;
import app.fitnessfinderapp.backend.accountRole.AccountRoleRepository;
import app.fitnessfinderapp.backend.userAccount.UserAccount;
import app.fitnessfinderapp.backend.userAccount.UserAccountRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class AuthenticationService {

  @Autowired
  private UserAccountRepository userAccountRepository;

  @Autowired
  private AccountRoleRepository accountRoleRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private TokenService tokenService;

  public UserAccount registerUser(String username, String password) {

    String encodedPassword = passwordEncoder.encode(password);
    AccountRole userRole = accountRoleRepository.findByAuthority("USER").get();

    Set<AccountRole> authorities = new HashSet<>();

    authorities.add(userRole);

    return userAccountRepository.save(new UserAccount(0, username, encodedPassword, authorities));
  }

  public LoginResponseDTO loginUser(String username, String password) {

    try {
      Authentication auth = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(username, password)
      );
      String token = tokenService.generateJwt(auth);

      return new LoginResponseDTO(userAccountRepository.findByUsername(username).get(), token);

    } catch (AuthenticationException e) {
      return new LoginResponseDTO(null, "");
    }
  }
  
}
