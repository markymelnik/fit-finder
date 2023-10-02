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
  neighborhood: Neighborhood;
  latitude: number;
  longitude: number;
  webUrl: string;
  facilityType: FacilityType;
  amenities: Amenity[];
  offerings: Offering[];
}

export interface FacilityType {
  id: number;
  name: string;
}

export interface Neighborhood {
  id: number;
  name: string;
  borough: Borough;
}

export interface Borough {
  id: number;
  name: string;
}

export interface Amenity {
  id: number;
  name: string;
}

export interface Offering {
  id: number;
  name: string;
}