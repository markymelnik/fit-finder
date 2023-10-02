package app.fitnessfinderapp.backend.services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicesRepository 
  extends JpaRepository<Services, Long> {
  
  List<Services> findAllByOrderByIdAsc();

  @Query("SELECT s FROM Services s JOIN s.facilities facility WHERE facility.id = :facilityId")
  List<Services> getServicesByFacilityId(@Param("facilityId") Long facilityId);
  }
