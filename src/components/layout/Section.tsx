import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`
      py-lg sm:py-xl lg:py-2xl
      ${className}
    `}>
      {children}
    </section>
  );
}