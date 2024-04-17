import styled from "styled-components";
import {
  Black,
  ButtonAltColor,
  ButtonAltHoverColor,
  ButtonColor,
  ButtonHoverColor,
  Transparent,
  White
} from "../Colors";
import {
  BorderRadius,
  ButtonCursor,
  ButtonFontWeight,
  ButtonOutlineBorder,
  ButtonPadding
} from "../BaseThemeStyle";

interface ComponentProps {
  background?: string;
  backgroundHover?: string;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  padding?: string;
}

export const Button = styled.button<ComponentProps>`
  background: ${(props) => props.background || ButtonColor};
  border-color: ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || White};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonHoverColor};
  }
`;

export const ButtonAlt = styled.button<ComponentProps>`
  background: ${(props) => props.background || ButtonAltColor};
  border-color: ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || White};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonAltHoverColor};
  }
`;

export const ButtonOutlined = styled.button<ComponentProps>`
  background: ${(props) => props.background || Transparent};
  border: ${ButtonOutlineBorder} solid
    ${(props) => props.borderColor || ButtonColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || ButtonColor};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonColor};
    color: ${White};
  }
`;

export const ButtonOutlinedAlt = styled.button<ComponentProps>`
  background: ${(props) => props.background || Transparent};
  border: ${ButtonOutlineBorder} solid
    ${(props) => props.borderColor || ButtonAltColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || ButtonAltColor};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonAltColor};
    color: ${White};
  }
`;
