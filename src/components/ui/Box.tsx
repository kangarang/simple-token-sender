import styled from 'styled-components'
import { ComposedStyleProps, composedStyleFns } from 'utils/styles'

interface BoxBaseProps {
  children?: any
  onClick?: (e: any) => void
  onMouseLeave?: (e: any) => void
  ref?: any
  disabled?: boolean
}

export type BoxProps = BoxBaseProps & ComposedStyleProps & { cursor?: string; bold?: boolean; id?: string }

const Box = styled.div<BoxProps>`
  box-sizing: border-box;

  ${({ bold }: any) => bold && 'font-weight: bold;'}

  ${composedStyleFns}

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
