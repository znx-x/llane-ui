import styled from "styled-components";
import { BorderThickness } from "../BaseThemeStyle";
import { Transparent } from "../Colors";

interface ComponentProps {
  alignText?: string;
  background?: string;
  borderColor?: string;
  borderThickness?: string;
  height?: string;
  margin?: string;
  overflow?: string;
  padding?: string;
  width?: string;
}

export const Container = styled.div<ComponentProps>`
    text-align: ${(props) => props.alignText}    
    background: ${(props) => props.background};
    border: ${(props) => props.borderThickness || BorderThickness} solid ${(props) => props.borderColor || Transparent};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    overflow: ${(props) => props.overflow};
    padding: ${(props) => props.padding};
    width: ${(props) => props.width};
`;
