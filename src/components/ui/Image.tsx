import styled from 'styled-components'
import { composedStyleFns, ComposedStyleProps } from 'utils/styles'

type ImageProps = ComposedStyleProps

const Image = styled.img<ImageProps & { width?: any }>`
  box-sizing: 'border-box';

  &:focus {
    outline: none;
  }

${composedStyleFns}
`

export default Image
