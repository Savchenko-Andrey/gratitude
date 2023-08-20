export const theme = {
  colors: {
    blackLight: 'rgba(3, 15, 15, 0.9)',
    main: '#003031',
    accent: '#634789',
    accentLight: 'rgba(99, 71, 137, 0.25)',
    white: '#F9FCFC',
    backgroundWhite: '#ffffff',
    whitesmoke: '#f5f5f5',
    background: '#F9FCFC',
    textColor: '#19334C',
    gradientCard:
      'linear-gradient(270deg, #634789 0%, rgba(99, 71, 137, 0) 100%)',
    gradientGallery:
      'linear-gradient(360deg, #634789 -4.78%, rgba(99, 71, 137, 0) 100%)',
    gradientMenu: 'linear-gradient(91.41deg, #634789 1.38%, #4b3b6b);',
  },

  space: [
    '0px',
    '4px',
    '8px',
    '11px',
    '16px',
    '20px',
    '28px',
    '32px',
    '40px',
    '44px',
    '50px',
    '76px',
    '90px',
    '80px',
    '110px',
    '212px',
  ],

  fonts: {
    body: 'Morgrach, sans-serif',
  },

  fontSizes: {
    xxxs: '12px',
    xxs: '14px',
    xs: '16px',
    ms: '18px',
    s: '20px',
    f: '23px',
    m: '24px',
    l: '28px',
    xl: '40px',
    xxl: '48px',
    xxxl: '64px',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    min: 1.33,
    normal: 1.35,
    max: 1.375,
    ultra: 1.6,
  },

  letterSpacings: {
    min: '-0.01em',
    normal: '0.04em',
    max: '0.07em',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
    big: '3px solid',
  },

  shadows: {
    cardOk:
      '68px 152px 67px rgba(83, 59, 121, 0.01), 38px 85px 56px rgba(83, 59, 121, 0.05), 17px 38px 42px rgba(83, 59, 121, 0.09), 4px 9px 23px rgba(83, 59, 121, 0.1), 0px 0px 0px rgba(83, 59, 121, 0.1)',
    cardNotOk:
      '72px 140px 63px rgba(99, 71, 136, 0.01), 41px 78px 53px rgba(99, 71, 136, 0.05), 18px 35px 39px rgba(99, 71, 136, 0.09), 5px 9px 22px rgba(99, 71, 136, 0.1), 0px 0px 0px rgba(99, 71, 136, 0.1)',
  },

  radii: {
    none: '0',
    normal: '8px',
    round: '50%',
  },

  screens: {
    xs: 319, // => no min-width
    mobil: 320,
    // => @media (min-width: 320px) { ... }

    tablet: 768,
    // => @media (min-width: 768px) { ... }

    desktop: 1280,
    // => @media (min-width: 1280px) { ... }
  },
};
