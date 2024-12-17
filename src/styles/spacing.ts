// Spacing constants in pixels
export const SPACING = {
  base: 16,    // 16px - Base padding
  xs: 8,       // 8px - Minimum spacing
  sm: 12,      // 12px - Form elements
  md: 24,      // 24px - Vertical spacing
  lg: 32,      // 32px - Section padding
  xl: 40,      // 40px - Large sections
  '2xl': 48,   // 48px - Hero sections
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;