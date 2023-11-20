import styled from 'styled-components'
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
  FlexboxProps,
} from 'styled-system'
import { BoxProps } from './Box'
import { ComposedStyleProps, composedStyleFns } from 'utils/styles'

interface FlexBaseProps {
  id?: string
  wrap?: boolean | string
  column?: boolean
  justifyCenter?: boolean
  justifyEnd?: boolean
  justifyBetween?: boolean
  justifyAround?: boolean
  alignCenter?: boolean
  alignEnd?: boolean
  alignStart?: boolean
}

type FlexProps = BoxProps &
  FlexBaseProps & { style?: any; bold?: boolean; wrap?: boolean | string } & ComposedStyleProps

const Flex = styled.div<FlexProps>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: ${(props: any) => {
    if (props.wrapReverse) return 'wrap-reverse'
    else if (props.wrap) return 'wrap'
    return 'nowrap'
  }};
  justify-content: ${(props: any) => {
    if (props.justifyContent) return props.justifyContent
    if (props.justifyCenter) return 'center'
    else if (props.justifyAround) return 'space-around'
    else if (props.justifyBetween) return 'space-between'
    else if (props.justifyEnd) return 'flex-end'
    return 'flex-start'
  }};
  align-items: ${(props: any) => {
    if (props.alignItems) return props.alignItems
    else if (props.alignStretch) return 'stretch'
    else if (props.alignEnd) return 'flex-end'
    if (props.alignCenter) return 'center'
    else if (props.alignBaseline) return 'baseline'
    return 'flex-start'
  }};
  flex-direction: ${(props: any) => (props.column ? 'column' : 'row')};

  ${({ bold }: any) => bold && 'font-weight: bold;'}
  ${({ cursor }: any) => cursor && 'cursor: pointer;'}

  ${composedStyleFns}
`

export default Flex
