import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: {
        main: string;
        hover: string;
        active: string;
        light: string;
        dark: string;
        contrast: string;
      };
      secondary: {
        main: string;
        hover: string;
        light: string;
        dark: string;
      };
      success: {
        main: string;
        light: string;
        dark: string;
        contrast: string;
      };
      warning: {
        main: string;
        light: string;
        dark: string;
        contrast: string;
      };
      error: {
        main: string;
        light: string;
        dark: string;
        contrast: string;
      };
      info: {
        main: string;
        light: string;
        dark: string;
        contrast: string;
      };
      background: {
        default: string;
        paper: string;
        elevated: string;
        overlay: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        inverse: string;
        onPrimary: string;
      };
      border: {
        default: string;
        hover: string;
        focus: string;
        error: string;
      };
      state: {
        hover: string;
        selected: string;
        disabled: string;
      };
    };
    spacing: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      12: string;
      14: string;
      16: string;
      20: string;
      24: string;
    };
    typography: {
      fontFamily: {
        default: string;
        mono: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
      };
      fontWeight: {
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      lineHeight: {
        none: number;
        tight: number;
        snug: number;
        normal: number;
        relaxed: number;
        loose: number;
      };
      textStyles: {
        h1: {
          fontSize: string;
          fontWeight: number;
          lineHeight: number;
          margin: number;
        };
        h2: {
          fontSize: string;
          fontWeight: number;
          lineHeight: number;
          margin: number;
        };
        h3: {
          fontSize: string;
          fontWeight: number;
          lineHeight: number;
          margin: number;
        };
        body: {
          fontSize: string;
          fontWeight: number;
          lineHeight: number;
          margin: number;
        };
        caption: {
          fontSize: string;
          fontWeight: number;
          lineHeight: number;
          margin: number;
        };
        small: {
          fontSize: string;
          fontWeight: number;
          lineHeight: number;
          margin: number;
        };
      };
    };
    borderRadius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    boxShadow: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      inner: string;
    };
    borderWidth: {
      none: string;
      sm: string;
      md: string;
      lg: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      '2xl': number;
    };
    mediaQuery: {
      up: (key: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') => string;
      down: (key: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') => string;
      between: (min: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl', max: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') => string;
    };
    transitions: {
      duration: {
        fast: string;
        normal: string;
        slow: string;
      };
      easing: {
        easeInOut: string;
        easeIn: string;
        easeOut: string;
        linear: string;
      };
      standard: string;
      enter: string;
      leave: string;
    };
    zIndex: {
      base: number;
      dropdown: number;
      sticky: number;
      fixed: number;
      overlay: number;
      modal: number;
      popover: number;
      toast: number;
      tooltip: number;
    };
  }
}