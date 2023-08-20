export interface Facility {
  id: number;
  name: string;
  address: string;
  postalCode: string;
  neighborhood: string;
  facilityType: FacilityType;
  amenities: Amenity[];
  services: Service[];
}

export interface FacilityType {
  id: number;
  name: string;
  description: string;
}

export interface Amenity {
  id: number;
  name: string;
  description: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
}