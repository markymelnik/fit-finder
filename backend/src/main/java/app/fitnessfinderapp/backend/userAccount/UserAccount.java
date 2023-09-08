package app.fitnessfinderapp.backend.userAccount;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import app.fitnessfinderapp.backend.accountRole.AccountRole;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="useraccount")
public class UserAccount implements UserDetails {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="useraccount_id")
  private Integer id;

  private String username;

  private String password;

  @ManyToMany(fetch=FetchType.EAGER)
  @JoinTable(
    name="useraccount_role",
    joinColumns = {@JoinColumn(name="useraccount_id")},
    inverseJoinColumns = {@JoinColumn(name="role_id")}
  )
  private Set<AccountRole> authorities;

  public UserAccount() {
    this.authorities = new HashSet<AccountRole>();
  }

  public UserAccount(Integer id, String username, String password, Set<AccountRole> authorities) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.authorities = authorities;
  }

  public Integer getId() {
    return this.id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  @Override
  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  @Override
  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return this.authorities; 
  }

  public void setAuthorities(Set<AccountRole> authorities) {
    this.authorities = authorities;
  }
  
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }
  
}
