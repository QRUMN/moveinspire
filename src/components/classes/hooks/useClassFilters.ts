import { useState, useMemo } from 'react';
import { CLASSES_DATA } from '../data';
import type { Class, ClassFilters } from '../types';

export function useClassFilters() {
  const [filters, setFilters] = useState<ClassFilters>({
    search: '',
    level: 'All',
    intensity: 'All'
  });

  const filteredClasses = useMemo(() => {
    return CLASSES_DATA.filter((classData: Class) => {
      const matchesSearch = classData.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                          classData.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesLevel = filters.level === 'All' || classData.level === filters.level;
      
      const matchesIntensity = filters.intensity === 'All' || 
                              classData.intensity.toLowerCase().includes(filters.intensity.toLowerCase());

      return matchesSearch && matchesLevel && matchesIntensity;
    });
  }, [filters]);

  return {
    filters,
    setFilters,
    filteredClasses
  };
}