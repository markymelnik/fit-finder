package app.fitnessfinderapp.backend.favorite;

public class FavoriteDTO {
  private Long userAccountId;
  private Long facilityId;

  public Long getUserAccountId() {
    return userAccountId;
  }
  public void setUserAccountId(Long userAccountId) {
    this.userAccountId = userAccountId;
  }
  public Long getFacilityId() {
    return facilityId;
  }
  public void setFacilityId(Long facilityId) {
    this.facilityId = facilityId;
  }


}
