package app.fitnessfinderapp.backend.facility;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Facility {

  @Id
  @SequenceGenerator(
    name="facility_sequence",
    sequenceName="facility_sequence",
    allocationSize = 1
  )
  @GeneratedValue(
    strategy= GenerationType.SEQUENCE,
    generator = "facility_sequence"
  )
  
  private Long id;

  private String name;
  private String type;
  private String address;

  public Facility(Long id, String name, String type, String address) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.address = address;
  }

  public Facility(String name, String type, String address) {
    this.name = name;
    this.type = type;
    this.address = address;
  }

  public Facility() {

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

  public String getType() {
    return this.type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public String getAddress() {
    return this.address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  @Override
  public String toString() {
    return "Facility {" + "id=" + id + ", name=" + name + '\'' + ", type=" + type + '\'' + ", address=" + '\'' + address + '}'; 
  }

}
