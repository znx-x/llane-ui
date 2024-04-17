import styled from "styled-components";
import {
  BorderRadius,
  BorderThickness,
  InputFontSize,
  InputPadding,
  TextAreaBorderRadius,
  TextAreaFontSize,
  TextAreaPadding
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
  width?: string;
  resize?: string;
}

export const TextArea = styled.textarea<ComponentProps>`
  background: ${(props) => props.background || ComponentBackground};
  border: ${(props) => props.borderThickness || BorderThickness} solid
    ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || TextAreaBorderRadius};
  color: ${(props) => props.fontColor || TextColor};
  font-size: ${(props) => props.fontSize || TextAreaFontSize};
  padding: ${TextAreaPadding};
  width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  resize: ${(props) => props.resize || 'true'}
`;

export const TextAreaOutlined = styled.textarea<ComponentProps>`
  background: ${(props) => props.background || Transparent};
  border: ${(props) => props.borderThickness || BorderThickness} solid
    ${(props) => props.borderColor || BorderColor};
  border-radius: ${(props) => props.borderRadius || TextAreaBorderRadius};
  color: ${(props) => props.fontColor || TextColor};
  font-size: ${(props) => props.fontSize || TextAreaFontSize};
  padding: ${TextAreaPadding};
  width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  resize: ${(props) => props.resize || 'true'}
`;
