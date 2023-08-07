package app.fitnessfinderapp.backend.facility;

import java.util.ArrayList;
import java.util.List;

import app.fitnessfinderapp.backend.amenity.Amenity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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

  @ManyToMany
  @JoinTable(
    name="facility_amenity",
    joinColumns = @JoinColumn(name="facility_id"),
    inverseJoinColumns = @JoinColumn(name="amenity_id")
  )
  private List<Amenity> amenities = new ArrayList<>();
  
  

  private String name;
  private String type;
  private String address;
  private String neighborhood;
  private String postal_code;

  public Facility(Long id, String name, String type, String address, String neighborhood, String postal_code) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.address = address;
    this.neighborhood = neighborhood;
    this.postal_code = postal_code;
  }

  public Facility(String name, String type, String address, String neighborhood, String postal_code) {
    this.name = name;
    this.type = type;
    this.address = address;
    this.neighborhood = neighborhood;
    this.postal_code = postal_code;
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

  public String getNeighborhood() {
    return this.neighborhood;
  }

  public void setNeighborhood(String neighborhood) {
    this.neighborhood = neighborhood;
  }

  public String getPostalCode() {
    return this.postal_code;
  }

  public void setPostCode(String postal_code) {
    this.postal_code = postal_code;
  }



  @Override
  public String toString() {
    return "Facility {" + "id=" + id + ", name=" + name + '\'' + ", type=" + type + '\'' + ", address=" + '\'' + address
        + '\'' + ", neighborhood=" + '\'' + neighborhood + '\'' + ", postal_code=" + '\'' + postal_code + '}';
  }

}
