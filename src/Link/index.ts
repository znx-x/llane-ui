import styled from 'styled-components'

interface ComponentProps {
    size?: string;
    weight?: string;
    decoration?: string;
    hoverDecoration?: string;
    color?: string;
    margin?: string;
  }

export const Link = styled.a<ComponentProps>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || 'auto' };
    font-weight: ${(props) => props.weight || 'normal' };
    text-decoration: ${(props) => props.decoration || 'none' };
    &:hover {
        text=decoration: ${(props) => props.hoverDecoration || 'underline' }
    }
`

export const LinkWrapper = styled.a<ComponentProps>`
    margin: ${(props) => props.margin};
`