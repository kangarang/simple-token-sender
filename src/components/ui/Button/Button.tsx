import styled from 'styled-components/macro'
import {
  space,
  color,
  layout,
  typography,
  border,
  background,
  shadow,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  BorderProps,
  BackgroundProps,
  ShadowProps,
} from 'styled-system'
import { COLORS } from 'utils/styles'

const Button = styled.button<
  SpaceProps &
    ColorProps &
    LayoutProps &
    TypographyProps &
    BorderProps &
    BackgroundProps &
    ShadowProps &
    any
>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.85);
  padding: 0.5em 1em;
  cursor: pointer;
  font-family: inherit;
  font-size: 1em;
  white-space: normal;

  & > div {
    display: flex;
    align-items: center;
  }

  &:focus {
    border: none;
    outline: 0 !important;
    outline-style: none;
  }

  &:active {
    background-color: ${COLORS.lime};
    color: ${COLORS.pink};
    box-shadow: 2px 2px 0px ${COLORS.pink};

    &:after {
      box-shadow: inset 0px -2px 5px ${props => (props.primary ? 'var(--primary)' : 'rgba(255, 255, 255)')},
        inset 0px 2px 5px ${props => (props.primary ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.15)')};
    }
  }

  ${props =>
    props.active &&
    `
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
    
    &:after {
      box-shadow: inset 0px -2px 5px rgb(255, 255, 255), inset 0px 2px 5px rgba(0, 0, 0, 0.15);
    }
  `}

  ${props =>
    props.disabled &&
    `
    pointer-events: none;
    opacity:  ${props.active ? '0.8' : '0.5'};
  `}

  ${space};
  ${color};
  ${layout};
  ${typography};
  ${border};
  ${background};
  ${shadow};
`

export default Button
