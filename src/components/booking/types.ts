export interface TimeSlot {
  id: string;
  time: string;
  instructor: string;
  duration: string;
  spotsLeft: number;
  maxSpots: number;
}

export interface BookingState {
  selectedDate: Date;
  selectedSlot: TimeSlot | null;
}

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