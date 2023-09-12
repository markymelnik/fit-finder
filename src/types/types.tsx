export interface UserAccount {
  id: string;
  username: string;
  password: string;
  [key: string]: any;
}

export interface Facility {
  id: number;
  name: string;
  address: string;
  postalCode: string;
  neighborhood: string;
  latitude: number;
  longitude: number;
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