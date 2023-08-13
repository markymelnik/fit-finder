package app.fitnessfinderapp.backend.amenity;

import java.util.HashSet;
import java.util.Set;

import app.fitnessfinderapp.backend.facility.Facility;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Amenity {
  
  @Id
  @SequenceGenerator(
    name="amenity_sequence",
    sequenceName="amenity_sequence",
    allocationSize = 1
  )

  @GeneratedValue(
    strategy= GenerationType.SEQUENCE,
    generator = "amenity_sequence"
  )
  private Long id;

  @ManyToMany(mappedBy = "amenities")
  private Set<Facility> facilities = new HashSet<>();
  
  private String name;
  private String description;

  public Amenity(Long id, String name, String description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  public Amenity(String name, String description) {
    this.name = name;
    this.description = description;
  }

  public Amenity() {

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

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @Override
  public String toString() {
    return "Amenity {" + "id=" + id + ", name=" + name + '\'' + ", description:" + description + '}';

  }
}
