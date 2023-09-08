package app.fitnessfinderapp.backend.accountRole;

import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="role")
public class AccountRole implements GrantedAuthority {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="role_id")
  private Long id;

  private String authority;

  public AccountRole() {

  }

  public AccountRole(String authority) {
    this.authority = authority;
  }

  public AccountRole(Long id, String authority) {
    this.id = id;
    this.authority = authority;
  }
  
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @Override
  public String getAuthority() {
    return this.authority;
  }

  public void setAuthority(String authority) {
    this.authority = authority;
  }
  
}
