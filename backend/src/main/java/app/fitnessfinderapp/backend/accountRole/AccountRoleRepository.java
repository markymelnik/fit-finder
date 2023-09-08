package app.fitnessfinderapp.backend.accountRole;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRoleRepository extends JpaRepository<AccountRole, Long> {
  Optional<AccountRole> findByAuthority(String authority);
}
