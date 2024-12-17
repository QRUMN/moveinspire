export interface Class {
  id: string;
  name: string;
  description: string;
  image: string;
  schedule: string[];
  duration: number;
  intensity: string;
  level: string;
  capacity: number;
  instructor: string;
}

export interface ClassFilters {
  search: string;
  level: string;
  intensity: string;
}