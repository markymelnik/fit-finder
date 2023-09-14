package app.fitnessfinderapp.backend.favorite;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.fitnessfinderapp.backend.facility.Facility;
import app.fitnessfinderapp.backend.userAccount.UserAccount;

@Service
public class FavoriteService {
  
  @Autowired
  private FavoriteRepository favoriteRepository;

  public void addFavorite(UserAccount userAccount, Facility facility) {
    Favorite favorite = new Favorite();
    favorite.setUserAccount(userAccount);
    favorite.setFacility(facility);
    favoriteRepository.save(favorite);
  }

  public void removeFavorite(Long favoriteId) {
    Optional<Favorite> existingFavorite = favoriteRepository.findById(favoriteId);

    if (existingFavorite.isPresent()) {
      favoriteRepository.deleteById(favoriteId);
    }
  }

  public List<Favorite> listFavoritesByUser(Long userAccountId) {
    return favoriteRepository.findByUserAccountId(userAccountId);
  }

  public boolean isFavoriteExist(UserAccount userAccount, Facility facility) {
    return favoriteRepository.existsByUserAccountAndFacility(userAccount, facility);
  }
}
