package app.fitnessfinderapp.backend.borough;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoroughService {
  
  private final BoroughRepository boroughRepository;

  @Autowired
  public BoroughService(BoroughRepository boroughRepository) {
    this.boroughRepository = boroughRepository;
  }

  public Set<Borough> getAllBoroughs() {
    return new HashSet<>(boroughRepository.findAll());
  }
  
}
