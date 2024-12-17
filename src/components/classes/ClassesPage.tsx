import React from 'react';
import { Container } from '../layout/Container';
import { PageHeader } from '../layout/PageHeader';
import { ClassGrid } from './components/ClassGrid';
import { ClassFilters } from './components/ClassFilters';
import { useClassFilters } from './hooks/useClassFilters';
import { BackButton } from '../common/BackButton';

export function ClassesPage() {
  const { filters, setFilters, filteredClasses } = useClassFilters();

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <BackButton to="/" label="Back to Home" />
        
        <PageHeader 
          title="Discover Our Classes" 
          subtitle="Find the perfect movement practice for your journey"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ClassFilters 
              filters={filters}
              onChange={setFilters}
            />
          </div>
          
          <div className="lg:col-span-3">
            <ClassGrid classes={filteredClasses} />
          </div>
        </div>
      </Container>
    </div>
  );
}