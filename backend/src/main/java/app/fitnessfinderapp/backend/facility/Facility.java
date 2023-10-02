package app.fitnessfinderapp.backend.facility;

import java.util.HashSet;
import java.util.Set;

import app.fitnessfinderapp.backend.amenity.Amenity;
import app.fitnessfinderapp.backend.facilityType.FacilityType;
import app.fitnessfinderapp.backend.neighborhood.Neighborhood;
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
  private Set<Amenity> amenities = new HashSet<>();

  @ManyToMany
  @JoinTable(
    name="facility_services",
    joinColumns = @JoinColumn(name="facility_id"),
    inverseJoinColumns = @JoinColumn(name="services_id")
  )
  private Set<Services> services = new HashSet<>();

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "type_id")
  private FacilityType facilityType;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "neighborhood_id")
  private Neighborhood neighborhood;

  private String name;
  private String address;
  private String postalCode;

  private Double latitude;
  private Double longitude;

  private String webUrl;
  private String description;

  public Facility() {

  }

  public Facility(Long id, String name, String address, String postalCode, Double latitude, Double longitude, String webUrl, String description) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.postalCode = postalCode;
    this.latitude = latitude;
    this.longitude = longitude;
    this.webUrl = webUrl;
  }

  public Facility(String name, String address, String postalCode, Double latitude, Double longitude, String webUrl, String description) {
    this.name = name;
    this.address = address;
    this.postalCode = postalCode;
    this.latitude = latitude;
    this.longitude = longitude;
    this.webUrl = webUrl;
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

  public String getPostalCode() {
    return this.postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }

  public Double getLatitude() {
    return this.latitude;
  }

  public void setLatitude(Double latitude) {
    this.latitude = latitude;
  }

  public Double getLongitude() {
    return this.longitude;
  }

  public void setLongitude(Double longitude) {
    this.longitude = longitude;
  }

  public String getWebUrl() {
    return this.webUrl;
  }

  public void setWebUrl(String webUrl ){
    this.webUrl = webUrl;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public FacilityType getFacilityType() {
    return facilityType;
  }

  public Neighborhood getNeighborhood() {
    return neighborhood;
  }

  public Set<Amenity> getAmenities() {
    return amenities;
  }

  public Set<Services> getServices() {
    return services;
  }

  @Override
  public String toString() {
    return "Facility {" + "id=" + id + ", name=" + name + '\'' + ", address=" + '\'' + address
        + '\'' + ", neighborhood=" + '\'' + neighborhood + '\'' + ", postalCode=" + '\'' + postalCode + 
         '\'' + ", latitude=" + '\'' + latitude + '\'' + ", longitude=" + '\'' + longitude + '\'' + '\'' + 
         ", webUrl=" + '\'' + webUrl + ", description=" + '\'' + description + '}';
  }

}