package app.fitnessfinderapp.backend.favorite;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;

import app.fitnessfinderapp.backend.facility.Facility;
import app.fitnessfinderapp.backend.facility.FacilityRepository;
import app.fitnessfinderapp.backend.userAccount.UserAccount;
import app.fitnessfinderapp.backend.userAccount.UserAccountRepository;

@Controller
@RequestMapping("api/favorites")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Autowired
    private FacilityRepository facilityRepository;

    @PostMapping("/add")
    public ResponseEntity<?> addFavorite(@RequestBody FavoriteDTO body) {
      UserAccount userAccount = userAccountRepository.findById(body.getUserAccountId())
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User account not found"));
  
      Facility facility = facilityRepository.findById(body.getFacilityId())
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Facility not found"));
      
      boolean isFavoriteExist = favoriteService.isFavoriteExist(userAccount, facility);
      if (isFavoriteExist) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
          .body("This facility is already in the user's favorited facilities list.");
      }
  
      favoriteService.addFavorite(userAccount, facility);
  
      return ResponseEntity.ok().build();
  }

    @DeleteMapping("/{favoriteId}")
    public ResponseEntity<Void> removeFavorite(@PathVariable Long favoriteId) {
        favoriteService.removeFavorite(favoriteId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/list/{userId}")
    public ResponseEntity<List<Favorite>> listFavorites(@PathVariable Long userId) {
        return ResponseEntity.ok(favoriteService.listFavoritesByUser(userId));
    }
}
