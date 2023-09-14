package app.fitnessfinderapp.backend;

import java.util.HashSet;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import app.fitnessfinderapp.backend.accountRole.AccountRole;
import app.fitnessfinderapp.backend.accountRole.AccountRoleRepository;
import app.fitnessfinderapp.backend.userAccount.UserAccount;
import app.fitnessfinderapp.backend.userAccount.UserAccountRepository;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(AccountRoleRepository accountRoleRepository, UserAccountRepository userAccountRepository, PasswordEncoder passwordEncoder) {

		return args -> {

			if(accountRoleRepository.findByAuthority("ADMIN").isPresent()) return;
			 
			AccountRole adminRole = accountRoleRepository.save(new AccountRole("ADMIN"));
			accountRoleRepository.save(new AccountRole("USER"));

			Set<AccountRole> accountRoles = new HashSet<>();
			accountRoles.add(adminRole);

			UserAccount admin = new UserAccount("admin", passwordEncoder.encode("password"), accountRoles);
			
			userAccountRepository.save(admin);
		};
	}
}
