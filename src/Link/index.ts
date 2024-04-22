import styled from 'styled-components'
import { LinkColor } from '../Colors';

interface ComponentProps {
    size?: string;
    weight?: string;
    decoration?: string;
    decorationHover?: string;
    color?: string;
    colorHover?: string;
    margin?: string;
  }

export const Link = styled.a<ComponentProps>`
    color: ${(props) => props.color || LinkColor};
    font-size: ${(props) => props.size || 'auto'};
    font-weight: ${(props) => props.weight || 'normal'};
    text-decoration: ${(props) => props.decoration || 'none'};
    &:hover {
        color: ${(props) => props.colorHover || LinkColor};
        text-decoration: ${(props) => props.decorationHover || 'underline'};
    }
`

export const LinkWrapper = styled.a<ComponentProps>`
    margin: 0;
    text-decoration: none;
`
