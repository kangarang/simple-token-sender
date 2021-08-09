import styled from 'styled-components/macro'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'

type ImageProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps

const Image = styled.img<ImageProps & { width?: any }>`
  box-sizing: 'border-box';

  &:focus {
    outline: none;
  }

  ${space};
  ${color};
  ${typography};
  ${flexbox};
  ${border};
  ${background};
  ${shadow};
  ${position};
  ${layout};
`

export default Image
