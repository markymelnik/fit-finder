package app.fitnessfinderapp.backend.services;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicesRepository 
  extends JpaRepository<Services, Long> {
  
  }
