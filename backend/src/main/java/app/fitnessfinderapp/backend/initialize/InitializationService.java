package app.fitnessfinderapp.backend.initialize;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import app.fitnessfinderapp.backend.accountRole.AccountRole;
import app.fitnessfinderapp.backend.accountRole.AccountRoleRepository;
import app.fitnessfinderapp.backend.userAccount.UserAccount;
import app.fitnessfinderapp.backend.userAccount.UserAccountRepository;

@Service
public class InitializationService {

  @Autowired
  UserAccountRepository userAccountRepository;

  @Autowired
  AccountRoleRepository accountRoleRepository;

  @Autowired
  PasswordEncoder passwordEncoder;

  @Value("${ADMIN_USERNAME}")
  private String adminUsername;

  @Value("${ADMIN_PASSWORD}")
  private String adminPassword;

  public void initializeDefaults() {
    if (accountRoleRepository.findByAuthority("ADMIN").isPresent()) return;

    AccountRole adminRole = accountRoleRepository.save(new AccountRole("ADMIN"));
    accountRoleRepository.save(new AccountRole("USER"));

    Set<AccountRole> accountRoles = new HashSet<>();
		accountRoles.add(adminRole);

    UserAccount admin = new UserAccount(adminUsername, passwordEncoder.encode(adminPassword), accountRoles);
		userAccountRepository.save(admin);

  }
}
