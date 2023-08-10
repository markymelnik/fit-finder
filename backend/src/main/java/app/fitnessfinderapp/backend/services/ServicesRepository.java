package app.fitnessfinderapp.backend.services;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicesRepository 
  extends JpaRepository<Services, Long> {
  
  @Query("SELECT s FROM Services s JOIN s.facilities facility WHERE facility.id = :facilityId")
  Set<Services> getServicesByFacilityId(@Param("facilityId") Long facilityId);
  }
