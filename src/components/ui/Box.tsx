import styled from 'styled-components/macro'
import {
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
  background,
  shadow,
  position,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  FlexboxProps,
  BorderProps,
  BackgroundProps,
  ShadowProps,
  PositionProps,
} from 'styled-system'

interface BoxBaseProps {
  children?: any
  onClick?: (e: any) => void
  onMouseLeave?: (e: any) => void
  ref?: any
  disabled?: boolean
}

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps &
  FlexboxProps &
  BorderProps &
  BackgroundProps &
  ShadowProps &
  PositionProps &
  BoxBaseProps & { cursor?: string; bold?: boolean; id?: string }

const Box: React.FC<BoxProps> = styled.div<BoxProps>`
  box-sizing: border-box;

  ${({ bold }: any) => bold && 'font-weight: bold;'}

  ${space};
  ${color};
  ${layout};
  ${typography};
  ${flexbox};
  ${border};
  ${background};
  ${shadow};
  ${position};

  ${({ cursor }: any) => cursor && 'cursor: pointer;'}

  ::-webkit-scrollbar {
    width: 1px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
  }
`

export default Box
