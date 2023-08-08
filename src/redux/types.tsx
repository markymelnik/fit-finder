export interface Facility {
  id: number;
  name: string;
  type: string;
  address: string;
  neighborhood: string;
  postal_code: string;
  amenities: number[];
}

export interface Amenity {
  id: number;
  name: string;
  description: string;
}