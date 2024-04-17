import styled from "styled-components";
import {
  BorderRadius,
  BorderThickness,
  InputFontSize,
  InputPadding
} from "../BaseThemeStyle";
import {
  BorderColor,
  ComponentBackground,
  TextColor,
  Transparent
} from "../Colors";

interface ComponentProps {
  background?: string;
  borderColor?: string;
  borderRadius?: string;
  borderThickness?: string;
  fontColor?: string;
  fontSize?: string;
}

export const Input = styled.input<ComponentProps>`
  background: ${(props) => props.background || ComponentBackground};
  border: ${(props) => props.borderThickness || BorderThickness} solid
    ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || TextColor};
  font-size: ${(props) => props.fontSize || InputFontSize};
  padding: ${InputPadding};
`;

export const InputOutlined = styled.input<ComponentProps>`
  background: ${(props) => props.background || Transparent};
  border: ${(props) => props.borderThickness || BorderThickness} solid
    ${(props) => props.borderColor || BorderColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || TextColor};
  font-size: ${(props) => props.fontSize || InputFontSize};
  padding: ${InputPadding};
`;
