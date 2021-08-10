import * as React from 'react'
import styled from 'styled-components'
import { color, layout, space } from 'styled-system'

const StyledIcon = styled.img`
  ${({ cursor }: any) => cursor && 'cursor: pointer;'}

  ${space}
  ${layout}
  ${color}
`

const Icon = ({ src, width, alt, ...rest }: any) => {
  return <StyledIcon src={src} width={width || 260} alt={alt || `${src.slice(4)} icon`} {...rest} />
}

export default Icon
