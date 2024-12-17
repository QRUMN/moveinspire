import type { Class } from '../types';

export const CLASSES_DATA: Class[] = [
  {
    id: '1',
    name: 'Hip-Hop Flow',
    description: 'Energetic cardio sessions focused on self-expression and confidence building through hip-hop dance.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    schedule: ['Mon 6pm', 'Wed 6pm', 'Sat 10am'],
    duration: 60,
    intensity: 'Medium',
    level: 'Intermediate',
    capacity: 20,
    instructor: 'Sarah Johnson'
  },
  {
    id: '2',
    name: 'Stretch & Release',
    description: 'Mindful movement sessions combining stretching and relaxation techniques for stress relief.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    schedule: ['Tue 7pm', 'Thu 7pm', 'Sun 9am'],
    duration: 45,
    intensity: 'Low',
    level: 'Beginner',
    capacity: 15,
    instructor: 'Emma Davis'
  },
  {
    id: '3',
    name: 'Power Dance',
    description: 'High-energy dance workout combining cardio and strength training for a full-body experience.',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    schedule: ['Mon 7pm', 'Wed 7pm', 'Fri 6pm'],
    duration: 60,
    intensity: 'High',
    level: 'Advanced',
    capacity: 18,
    instructor: 'Maya Thompson'
  }
];