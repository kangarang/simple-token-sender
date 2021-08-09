export const COLORS = {
  black: '#000000',
  white: '#F0F0F0',
  cyan: '#00FFFF',
  neon: {
    green: '#3bf58c',
    teal: '#00ffc3',
  },
  blues: {
    purple: '#888DBB',
    lighter: '#4BB2F9',
    light: '#84C9FB',
    midnight: '#272742',
  },
  greys: {
    dark: '#121212',
    medium: '#292926',
    light: '#e0dfdf',
    text: '#292926',
  },
  reds: {
    dark: '#963C20',
    light: '#B2330B',
  },
  red: '#963C20',
  teal: '#03DAC5',
  blue: '#3700B3',
  green: '#379B53',
  gold: '#CCAA33',
  error: '#CF6679',

  oranges: {
    dark: '#FAC81A',
    light: '#FFDF6D',
  },
  orange: '#FF9600',
  purple: '#BC8AFD',
  lime: '#B0EC9A',
  tan: '#EDC29A',
  pink: '#E31D69',
  aqua: '#1DDECB',

  darkgray: '#121212',
  background: '#F0EEE8',
}

export const theme = {
  // 640px, 832px, 1024px, 1440px
  // '40em', '52em', '64em', '90em'
  breakpoints: ['640px', '832px', '1024px', '1440px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  fonts: ['Helvetica', 'sans-serif'],
  borders: [0, '1px solid', '2px solid', `1px solid ${COLORS.cyan}`],
  radii: [0, 2, 4, 16, 9999, '100%'],
  shadows: ['0px 5px 20px rgba(0, 0, 0, 0.1)', '0px 4px 10px #00000099'],
  sizes: [16, 32, 64, 128, 256],
  colors: {
    ...COLORS,
  },
}
