package app.fitnessfinderapp.backend.auth;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import app.fitnessfinderapp.backend.accountRole.AccountRole;
import app.fitnessfinderapp.backend.accountRole.AccountRoleRepository;
import app.fitnessfinderapp.backend.userAccount.UserAccount;
import app.fitnessfinderapp.backend.userAccount.UserAccountRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class AuthenticationService {

  @Autowired
  private UserAccountRepository applicationUserRepository;

  @Autowired
  private AccountRoleRepository roleRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  public UserAccount registerUser(String username, String password) {

    String encodedPassword = passwordEncoder.encode(password);
    AccountRole userRole = roleRepository.findByAuthority("USER").get();

    Set<AccountRole> authorities = new HashSet<>();

    authorities.add(userRole);

    return applicationUserRepository.save(new UserAccount(0, username, encodedPassword, authorities));
  }
  
}
