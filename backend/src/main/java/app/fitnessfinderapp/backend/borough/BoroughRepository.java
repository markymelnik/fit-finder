package app.fitnessfinderapp.backend.borough;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoroughRepository
  extends JpaRepository<Borough, Long> {

}
