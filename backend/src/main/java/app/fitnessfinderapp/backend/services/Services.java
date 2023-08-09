package app.fitnessfinderapp.backend.services;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Services {
  
  @Id
  @SequenceGenerator(
    name="service_sequence",
    sequenceName="service_sequence",
    allocationSize = 1
  )

  @GeneratedValue(
    strategy= GenerationType.SEQUENCE,
    generator= "service_sequence"
  )
  private Long id;

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
