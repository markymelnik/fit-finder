package app.fitnessfinderapp.backend.userAccount;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Integer> {
  Optional<UserAccount> findByUsername(String username);
}
