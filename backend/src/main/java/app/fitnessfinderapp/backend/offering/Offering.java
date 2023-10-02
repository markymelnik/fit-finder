package app.fitnessfinderapp.backend.offering;

import java.util.HashSet;
import java.util.Set;

import app.fitnessfinderapp.backend.facility.Facility;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Offering {
  
  @Id
  @SequenceGenerator(
    name="offering_sequence",
    sequenceName="offering_sequence",
    allocationSize = 1
  )

  @GeneratedValue(
    strategy= GenerationType.SEQUENCE,
    generator= "offering_sequence"
  )
  private Long id;

  @ManyToMany(mappedBy = "offerings", fetch=FetchType.EAGER)
  private Set<Facility> facilities = new HashSet<>();

  private String name;

  public Offering() {

  }

  public Offering(Long id, String name) {
    this.id = id;
    this.name = name;
  }

  public Offering(String name) {
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
    return "Offering {" + "id=" + id + ", name=" + name + '\'' + '}';

  }

}
