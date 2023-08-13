package app.fitnessfinderapp.backend.facility;

import java.util.ArrayList;
import java.util.List;

import app.fitnessfinderapp.backend.amenity.Amenity;
import app.fitnessfinderapp.backend.facilityType.FacilityType;
import app.fitnessfinderapp.backend.services.Services;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
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

  @ManyToMany
  @JoinTable(
    name="facility_services",
    joinColumns = @JoinColumn(name="facility_id"),
    inverseJoinColumns = @JoinColumn(name="services_id")
  )
  private List<Services> services = new ArrayList<>();

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "facilityType_id")
  private FacilityType facilityType;
  
  private String name;
  private String address;
  private String neighborhood;
  private String postal_code;

   public Facility() {

  }

  public Facility(Long id, String name, String address, String neighborhood, String postal_code) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.neighborhood = neighborhood;
    this.postal_code = postal_code;
  }

  public Facility(String name, String address, String neighborhood, String postal_code) {
    this.name = name;
    this.address = address;
    this.neighborhood = neighborhood;
    this.postal_code = postal_code;
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

  public void setPostalCode(String postal_code) {
    this.postal_code = postal_code;
  }

  public FacilityType getFacilityType() {
    return facilityType;
  }

  public List<Amenity> getAmenities() {
    return amenities;
  }

  public List<Services> getServices() {
    return services;
  }

  @Override
  public String toString() {
    return "Facility {" + "id=" + id + ", name=" + name + '\'' + ", address=" + '\'' + address
        + '\'' + ", neighborhood=" + '\'' + neighborhood + '\'' + ", postal_code=" + '\'' + postal_code + '}';
  }

}
