import React from 'react';
import { Container } from './Container';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50 pt-24 ${className}`}>
      <Container>
        {children}
      </Container>
    </div>
  );
}