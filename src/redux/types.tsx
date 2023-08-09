export interface Facility {
  id: number;
  name: string;
  type: string;
  address: string;
  amenities: Amenity[];
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