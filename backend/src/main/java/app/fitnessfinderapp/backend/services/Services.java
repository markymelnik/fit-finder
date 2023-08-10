package app.fitnessfinderapp.backend.services;

import java.util.ArrayList;
import java.util.List;

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
public class Services {
  
  @Id
  @SequenceGenerator(
    name="services_sequence",
    sequenceName="services_sequence",
    allocationSize = 1
  )

  @GeneratedValue(
    strategy= GenerationType.SEQUENCE,
    generator= "services_sequence"
  )
  private Long id;

  @ManyToMany(mappedBy = "services")
  private List<Facility> facilities = new ArrayList<>();

  private String name;
  private String description;

  public Services() {

  }

  public Services(Long id, String name, String description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  public Services(String name, String description) {
    this.name = name;
    this.description = description;
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

  public void setString(String description) {
    this.description = description;
  }

  @Override
  public String toString() {
    return "Service {" + "id=" + id + ", name=" + name + '\'' + ", description:" + description + '}';

  }

}
