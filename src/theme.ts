import { type Theme } from '@emotion/react';

const colors = {
  primary: {
    main: '#3b82f6',
    hover: '#2563eb',
    active: '#1d4ed8',
    light: '#93c5fd',
    dark: '#1e40af',
    contrast: '#ffffff',
  },
  secondary: {
    main: '#64748b',
    hover: '#475569',
    light: '#cbd5e1',
    dark: '#334155',
  },
  success: {
    main: '#22c55e',
    light: '#86efac',
    dark: '#15803d',
    contrast: '#ffffff',
  },
  warning: {
    main: '#f59e0b',
    light: '#fcd34d',
    dark: '#b45309',
    contrast: '#ffffff',
  },
  error: {
    main: '#ef4444',
    light: '#fca5a5',
    dark: '#b91c1c',
    contrast: '#ffffff',
  },
  info: {
    main: '#0ea5e9',
    light: '#7dd3fc',
    dark: '#0369a1',
    contrast: '#ffffff',
  },
  background: {
    default: '#f8fafc',
    paper: '#ffffff',
    elevated: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    disabled: '#94a3b8',
    inverse: '#ffffff',
    onPrimary: '#ffffff',
  },
  border: {
    default: '#e2e8f0',
    hover: '#cbd5e1',
    focus: '#3b82f6',
    error: '#ef4444',
  },
  state: {
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(59, 130, 246, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.12)',
  },
};

const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
};

const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
};

const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

const fontFamily = {
  default: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
};

const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textStyles: {
    h1: {
      fontSize: fontSize['4xl'],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.tight,
      margin: 0,
    },
    h2: {
      fontSize: fontSize['3xl'],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.tight,
      margin: 0,
    },
    h3: {
      fontSize: fontSize['2xl'],
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.snug,
      margin: 0,
    },
    body: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.normal,
      margin: 0,
    },
    caption: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.relaxed,
      margin: 0,
    },
    small: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.normal,
      margin: 0,
    },
  },
};

const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
};

const boxShadow = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
};

const borderWidth = {
  none: '0',
  sm: '1px',
  md: '2px',
  lg: '4px',
};

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const mediaQuery = {
  up: (key: keyof typeof breakpoints) =>
    `@media (min-width: ${String(breakpoints[key])}px)`,
  down: (key: keyof typeof breakpoints) =>
    `@media (max-width: ${String(breakpoints[key] - 1)}px)`,
  between: (min: keyof typeof breakpoints, max: keyof typeof breakpoints) =>
    `@media (min-width: ${String(breakpoints[min])}px) and (max-width: ${String(breakpoints[max] - 1)}px)`,
};

const transitions = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    linear: 'linear',
  },
  standard: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  enter: 'all 150ms cubic-bezier(0, 0, 0.2, 1)',
  leave: 'all 150ms cubic-bezier(0.4, 0, 1, 1)',
};

const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  overlay: 400,
  modal: 500,
  popover: 600,
  toast: 700,
  tooltip: 800,
};

export const theme: Theme = {
  colors,
  spacing,
  typography,
  borderRadius,
  boxShadow,
  borderWidth,
  breakpoints,
  mediaQuery,
  transitions,
  zIndex,
};

export const darkTheme: Theme = {
  colors: {
    primary: {
      main: '#60a5fa',
      hover: '#3b82f6',
      active: '#1d4ed8',
      light: '#93c5fd',
      dark: '#1e40af',
      contrast: '#0f172a',
    },
    secondary: {
      main: '#94a3b8',
      hover: '#cbd5e1',
      light: '#e2e8f0',
      dark: '#64748b',
    },
    success: {
      main: '#4ade80',
      light: '#86efac',
      dark: '#15803d',
      contrast: '#0f172a',
    },
    warning: {
      main: '#fbbf24',
      light: '#fcd34d',
      dark: '#b45309',
      contrast: '#0f172a',
    },
    error: {
      main: '#f87171',
      light: '#fca5a5',
      dark: '#b91c1c',
      contrast: '#0f172a',
    },
    info: {
      main: '#38bdf8',
      light: '#7dd3fc',
      dark: '#0369a1',
      contrast: '#0f172a',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
      elevated: '#334155',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
      disabled: '#64748b',
      inverse: '#0f172a',
      onPrimary: '#0f172a',
    },
    border: {
      default: '#334155',
      hover: '#475569',
      focus: '#60a5fa',
      error: '#f87171',
    },
    state: {
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(96, 165, 250, 0.15)',
      disabled: 'rgba(255, 255, 255, 0.1)',
    },
  },
  spacing,
  typography,
  borderRadius,
  boxShadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  },
  borderWidth,
  breakpoints,
  mediaQuery,
  transitions,
  zIndex,
};

export const focusVisibleStyles = (color: string = theme.colors.primary.main) => ({
  '&:focus-visible': {
    outline: `2px solid ${color}`,
    outlineOffset: '2px',
  },
});

export const hoverStyles = (
  styles: React.CSSProperties,
  disabledStyles?: React.CSSProperties
) => ({
  '&:hover': styles,
  '&:disabled': {
    ...disabledStyles,
    '&:hover': {
      ...disabledStyles,
    },
  },
});

export default theme;