package app.fitnessfinderapp.backend.borough;

import java.util.HashSet;
import java.util.Set;

import app.fitnessfinderapp.backend.neighborhood.Neighborhood;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Borough {
  
  @Id
  @SequenceGenerator(
    name="borough_sequence",
    sequenceName="borough_sequence",
    allocationSize = 1
  )

  @GeneratedValue(
    strategy = GenerationType.SEQUENCE,
    generator = "borough_sequence"
  )
  private Long id;

  @OneToMany(mappedBy="borough", fetch=FetchType.EAGER)
  private Set<Neighborhood> neighborhoods = new HashSet<>();

  private String name;

  public Borough() {

  }

  public Borough(Long id, String name) {
    this.id = id;
    this.name = name;
  }

  public Borough(String name) {
    this.name = name;
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return "Borough {" + "id=" + id + ", name=" + name + '}';
  }
}
