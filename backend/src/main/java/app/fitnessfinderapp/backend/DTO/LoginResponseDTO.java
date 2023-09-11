package app.fitnessfinderapp.backend.DTO;

import app.fitnessfinderapp.backend.userAccount.UserAccount;

public class LoginResponseDTO {

  private UserAccount userAccount;
  private String jwt;

  public LoginResponseDTO() {
  }

  public LoginResponseDTO(UserAccount userAccount, String jwt) {
    this.userAccount = userAccount;
    this.jwt = jwt;
  }

  public UserAccount getUserAccount() {
    return userAccount;
  }

  public void setUserAccount(UserAccount userAccount) {
    this.userAccount = userAccount;
  }

  public String getJwt() {
    return jwt;
  }

  public void setJwt(String jwt) {
    this.jwt = jwt;
  }

}
