package app.fitnessfinderapp.backend.neighborhood;

import java.util.HashSet;
import java.util.Set;

import app.fitnessfinderapp.backend.borough.Borough;
import app.fitnessfinderapp.backend.facility.Facility;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Neighborhood {
  
  @Id
  @SequenceGenerator(
    name="neighborhood_sequence",
    sequenceName="neighborhood_sequence",
    allocationSize = 1
  )

  @GeneratedValue(
    strategy=GenerationType.SEQUENCE,
    generator= "neighborhood_sequence"
  )
  private Long id;

  @OneToMany(mappedBy="neighborhood", fetch=FetchType.EAGER)
  private Set<Facility> facilities = new HashSet<>();

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "borough_id")
  private Borough borough;

  private String name;

  public Neighborhood() {

  }

  public Neighborhood(Long id, String name) {
    this.id = id;
    this.name = name;
  }

  public Neighborhood(String name) {
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

  public Borough getBorough() {
    return borough;
  }

  @Override
  public String toString() {
    return "Neighborhood {" + "id=" + id + ", name=" + name + ",borough=" + borough + '}';
  }
}
