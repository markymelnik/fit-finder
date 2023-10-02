package app.fitnessfinderapp.backend.services;

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

  @ManyToMany(mappedBy = "services", fetch=FetchType.EAGER)
  private Set<Facility> facilities = new HashSet<>();

  private String name;

  public Services() {

  }

  public Services(Long id, String name) {
    this.id = id;
    this.name = name;
  }

  public Services(String name) {
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
    return "Service {" + "id=" + id + ", name=" + name + '\'' + '}';

  }

}
