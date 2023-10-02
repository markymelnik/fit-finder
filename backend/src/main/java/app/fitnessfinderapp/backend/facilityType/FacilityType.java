package app.fitnessfinderapp.backend.facilityType;

import java.util.HashSet;
import java.util.Set;

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

  @OneToMany(mappedBy = "facilityType", fetch=FetchType.EAGER)
  private Set<Facility> facilities = new HashSet<>();

  private String name;

  public FacilityType() {

  }

  public FacilityType(Long id, String name) {
    this.id = id;
    this.name = name;
  }

  public FacilityType(String name) {
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
    return "Facility Type {" + "id=" + id + ", name=" + name + '\'' + '}';

  }

}
