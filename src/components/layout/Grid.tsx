import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function Grid({ 
  children, 
  cols = 1,
  gap = 'md',
  className = '' 
}: GridProps) {
  const getGridCols = () => {
    return `grid-cols-1 md:grid-cols-${cols}`;
  };

  const getGap = () => {
    const gapMap = {
      xs: 'gap-xs',
      sm: 'gap-sm',
      md: 'gap-md',
      lg: 'gap-lg',
    };
    return gapMap[gap];
  };

  return (
    <div className={`
      grid ${getGridCols()} ${getGap()}
      ${className}
    `}>
      {children}
    </div>
  );
}