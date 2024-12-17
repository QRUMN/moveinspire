import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-white rounded-xl shadow-sm
      p-base sm:p-md lg:p-lg
      ${className}
    `}>
      {children}
    </div>
  );
}