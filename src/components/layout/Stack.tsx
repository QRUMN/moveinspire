import React from 'react';

interface StackProps {
  children: React.ReactNode;
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Stack({ 
  children, 
  spacing = 'md',
  className = '' 
}: StackProps) {
  const getSpacing = () => {
    const spacingMap = {
      xs: 'space-y-xs',
      sm: 'space-y-sm',
      md: 'space-y-md',
      lg: 'space-y-lg',
      xl: 'space-y-xl',
    };
    return spacingMap[spacing];
  };

  return (
    <div className={`${getSpacing()} ${className}`}>
      {children}
    </div>
  );
}