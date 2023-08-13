package app.fitnessfinderapp.backend.facilityType;

import java.util.ArrayList;
import java.util.List;

import app.fitnessfinderapp.backend.facility.Facility;
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
public class FacilityType {

  @Id
  @SequenceGenerator(
    name="facilityType_sequence",
    sequenceName="facilityType_sequence",
    allocationSize = 1
  )

  @GeneratedValue(
    strategy= GenerationType.SEQUENCE,
    generator = "facilityType_sequence"
  )
  private Long id;

  @OneToMany(mappedBy = "facilityType", fetch = FetchType.EAGER)
  private List<Facility> facilities = new ArrayList<>();

  private String name;
  private String description;

  public FacilityType() {

  }

  public FacilityType(Long id, String name, String description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  public FacilityType(String name, String description) {
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

  public void setDeescription(String description) {
    this.description = description;
  }

  @Override
  public String toString() {
    return "Facility Type {" + "id=" + id + ", name=" + name + '\'' + ", description:" + description + '}';

  }

}
