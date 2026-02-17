/**
 * OXEDGEN Design System
 * 2026 Modern Responsive Design System
 *
 * Units: rem-based for accessibility & responsiveness
 * Typography: Fluid scaling with clamp()
 * Containers: max-width with fluid padding
 *
 * Import from this file throughout the app for consistency
 */

// ============================================
// COLORS
// ============================================

export const colors = {
  // Brand Colors
  brand: {
    navy: '#0e1c24',      // Main background
    cyan: '#42bdef',      // Primary accent (from logo)
    orange: '#FF6B35',    // Energy accent (CTAs, highlights)
    darkGray: '#222222',  // Secondary elements
    white: '#ffffff',     // Text
  },

  // Gradient variations
  gradients: {
    primary: 'linear-gradient(135deg, #42bdef 0%, #0ea5e9 100%)',
    secondary: 'linear-gradient(135deg, #0e1c24 0%, #1e3a4a 100%)',
    accent: 'linear-gradient(135deg, #42bdef 0%, #7c3aed 100%)', // Cyan to purple
    orange: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)', // Orange gradient
    mesh: 'radial-gradient(at 40% 20%, #42bdef 0px, transparent 50%), radial-gradient(at 80% 0%, #7c3aed 0px, transparent 50%), radial-gradient(at 0% 50%, #0e1c24 0px, transparent 50%)',
  },

  // Semantic colors
  semantic: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#42bdef',
  },

  // Opacity variations
  opacity: {
    glass: 'rgba(66, 189, 239, 0.1)',     // For glassmorphism
    overlay: 'rgba(14, 28, 36, 0.8)',     // For overlays
    border: 'rgba(66, 189, 239, 0.2)',    // For borders
    orangeGlass: 'rgba(255, 107, 53, 0.1)', // Orange glass
  },
};

// ============================================
// SPACING (rem-based for scalability)
// ============================================

export const spacing = {
  // Base spacing scale (rem units)
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96px
  '4xl': '8rem',   // 128px
  '5xl': '12rem',  // 192px

  // Section spacing (responsive)
  section: {
    mobile: '3.75rem',   // 60px
    tablet: '5rem',      // 80px
    desktop: '7.5rem',   // 120px
  },

  // Container system
  container: {
    maxWidth: '87.5rem',  // 1400px max width
    // Fluid padding: 20px on mobile → 60px on desktop
    padding: 'clamp(1.25rem, 4vw, 3.75rem)',
    paddingX: {
      mobile: '1.25rem',   // 20px
      tablet: '2.5rem',    // 40px
      desktop: '3.75rem',  // 60px
    },
  },

  // Grid gaps
  gap: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
};

// ============================================
// TYPOGRAPHY (Fluid + Responsive)
// ============================================

export const typography = {
  // Font families (defined in Tailwind config)
  fonts: {
    body: 'var(--font-inter)',           // Inter for body text
    heading: 'var(--font-space-grotesk)', // Space Grotesk for headings
  },

  // Fluid font sizes (clamp for smooth scaling)
  // Format: clamp(min, preferred, max)
  sizes: {
    // Headings (fluid)
    h1: 'clamp(2.5rem, 6vw, 5rem)',        // 40px → 80px
    h2: 'clamp(2rem, 5vw, 4rem)',          // 32px → 64px
    h3: 'clamp(1.75rem, 4vw, 3rem)',       // 28px → 48px
    h4: 'clamp(1.5rem, 3vw, 2.25rem)',     // 24px → 36px
    h5: 'clamp(1.25rem, 2.5vw, 1.875rem)', // 20px → 30px
    h6: 'clamp(1.125rem, 2vw, 1.5rem)',    // 18px → 24px

    // Body text (subtle fluid)
    body: 'clamp(1rem, 1.5vw, 1.125rem)',     // 16px → 18px
    bodyLarge: 'clamp(1.125rem, 2vw, 1.25rem)', // 18px → 20px
    bodySmall: 'clamp(0.875rem, 1.2vw, 1rem)', // 14px → 16px

    // Fixed sizes (for specific elements)
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
  },

  // Font weights
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Line heights
  lineHeights: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
  },
};

// ============================================
// ANIMATIONS
// ============================================

export const animations = {
  // Duration
  duration: {
    fast: '0.15s',
    normal: '0.3s',
    slow: '0.5s',
    slower: '0.75s',
  },

  // Easing
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Framer Motion variants
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    slideInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
    },
    slideInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
    stagger: {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  },

  // Transition configs
  transitions: {
    default: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
    spring: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
    bounce: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

// ============================================
// BREAKPOINTS
// ============================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Media queries (for use in styled-components or CSS-in-JS)
export const media = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
};

// ============================================
// SHADOWS
// ============================================

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  glass: '0 8px 32px 0 rgba(66, 189, 239, 0.1)',
  glassOrange: '0 8px 32px 0 rgba(255, 107, 53, 0.1)',
  glow: '0 0 20px rgba(66, 189, 239, 0.5)',
  glowOrange: '0 0 20px rgba(255, 107, 53, 0.5)',
};

// ============================================
// BORDER RADIUS
// ============================================

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem',   // 32px
  full: '9999px',
};

// ============================================
// Z-INDEX
// ============================================

export const zIndex = {
  base: 1,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  popover: 50,
  toast: 60,
  tooltip: 70,
};

// ============================================
// HELPER: Container Component Props
// ============================================

export const containerStyles = {
  width: '100%',
  maxWidth: spacing.container.maxWidth,
  margin: '0 auto',
  padding: `0 ${spacing.container.padding}`,
};

// ============================================
// HELPER: Section Spacing
// ============================================

export const sectionSpacing = {
  paddingTop: spacing.section.desktop,
  paddingBottom: spacing.section.desktop,
  // Use in media queries for mobile/tablet if needed
};

// ============================================
// EXPORT ALL
// ============================================

export default {
  colors,
  spacing,
  typography,
  animations,
  breakpoints,
  media,
  shadows,
  borderRadius,
  zIndex,
  containerStyles,
  sectionSpacing,
};
