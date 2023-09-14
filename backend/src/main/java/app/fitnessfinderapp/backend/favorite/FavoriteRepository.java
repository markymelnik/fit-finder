package app.fitnessfinderapp.backend.favorite;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.fitnessfinderapp.backend.facility.Facility;
import app.fitnessfinderapp.backend.userAccount.UserAccount;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
  List<Favorite> findByUserAccountId(Long userAccountId);
  boolean existsByUserAccountAndFacility(UserAccount userAccount, Facility facility);
}
