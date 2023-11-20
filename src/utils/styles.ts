import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  system,
  get,
  Scale,
} from 'styled-system'

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
  borders: [0, '1px solid black', `2px solid ${COLORS.purple}`, `1px solid ${COLORS.cyan}`],
  radii: [0, 2, 4, 16, 9999, '100%'],
  shadows: ['0px 5px 20px rgba(0, 0, 0, 0.1)', '0px 4px 10px #00000099'],
  sizes: [16, 32, 64, 128, 256],
  colors: {
    ...COLORS,
  },
}

export const composedStyleFns = () =>
  compose(
    space,
    color,
    layout,
    typography,
    border,
    background,
    shadow,
    position,
    flexbox,
    grid,
    system
  )

export type ComposedStyleProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  TypographyProps &
  SpaceProps &
  GridProps

export interface SquareDimensions {
  size?: number | string
  width?: number | string
}

export interface EzProps {
  bold?: boolean
  pointer?: boolean
  fullWidth?: boolean
}

export function ezProps(props: EzProps) {
  const { bold = false, pointer = false, fullWidth = false } = props
  let str = ''

  if (bold) {
    str = 'font-weight: bold;'
  }

  if (pointer) {
    str = `${str}cursor: pointer;`
  }

  if (fullWidth) {
    str = `${str}width: 100%;`
  }

  return str
}

export function squareDimensions({ size = 24, width }: SquareDimensions) {
  if (width) {
    size = width
  }

  return `width: ${size}px; height: ${size}px;`
}

const isNumber = (n: any) => typeof n === 'number' && !isNaN(n)

export const getValue = (n: any, scale: Scale | undefined): any =>
  get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%')
