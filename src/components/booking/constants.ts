import { addDays } from 'date-fns';
import { ClassSession } from './types';

export const NEXT_7_DAYS = Array.from({ length: 7 }).map((_, i) => addDays(new Date(), i));

export const CLASS_SESSIONS: ClassSession[] = [
  {
    id: '1',
    name: 'Hip-Hop',
    instructor: 'Sarah Johnson',
    time: '18:00',
    duration: '60 min',
    spotsLeft: 8,
    maxSpots: 20
  },
  {
    id: '2',
    name: 'Stretch & Release',
    instructor: 'Emma Davis',
    time: '19:00',
    duration: '45 min',
    spotsLeft: 12,
    maxSpots: 15
  }
];