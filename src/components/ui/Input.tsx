import styled from 'styled-components'
import { composedStyleFns, ComposedStyleProps } from 'utils/styles'

const Input = styled.input<ComposedStyleProps>`
  box-sizing: 'border-box';
  font-family: monospace;

  &:focus {
    outline: none;
  }

  ${composedStyleFns}
`

export default Input
