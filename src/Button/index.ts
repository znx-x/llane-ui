import styled from "styled-components";
import {
  BorderColor,
  ButtonAltColor,
  ButtonAltHoverColor,
  ButtonColor,
  ButtonHoverColor,
  TextColor,
  Transparent,
  White
} from "../Colors";
import {
  BorderRadius,
  ButtonCursor,
  ButtonFontWeight,
  ButtonLinkFontSize,
  ButtonLinkPadding,
  ButtonOutlineBorder,
  ButtonPadding
} from "../BaseThemeStyle";

interface ComponentProps {
  background?: string;
  backgroundHover?: string;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
}

export const Button = styled.button<ComponentProps>`
  box-sizing: border-box;
  background: ${(props) => props.background || ButtonColor};
  border-color: ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || White};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || "auto"};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.width || "auto"};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonHoverColor};
  }
`;

export const ButtonAlt = styled.button<ComponentProps>`
  box-sizing: border-box;
  background: ${(props) => props.background || ButtonAltColor};
  border-color: ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || White};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || "auto"};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.width || "auto"};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonAltHoverColor};
  }
`;

export const ButtonOutlined = styled.button<ComponentProps>`
  box-sizing: border-box;
  background: ${(props) => props.background || Transparent};
  border: ${ButtonOutlineBorder} solid
    ${(props) => props.borderColor || ButtonColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || ButtonColor};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || "auto"};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.width || "auto"};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonColor};
    color: ${White};
  }
`;

export const ButtonOutlinedAlt = styled.button<ComponentProps>`
  box-sizing: border-box;
  background: ${(props) => props.background || Transparent};
  border: ${ButtonOutlineBorder} solid
    ${(props) => props.borderColor || ButtonAltColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || ButtonAltColor};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || "auto"};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.width || "auto"};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonAltColor};
    color: ${White};
  }
`;

export const ButtonOutlinedDimmed = styled.button<ComponentProps>`
  box-sizing: border-box;
  background: ${(props) => props.background || Transparent};
  border: ${ButtonOutlineBorder} solid
    ${(props) => props.borderColor || BorderColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || TextColor};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || "auto"};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.width || "auto"};
  &:hover {
    background: ${(props) => props.backgroundHover || BorderColor};
    color: ${White};
  }
`;

export const ButtonLink = styled.a<ComponentProps>`
  box-sizing: border-box;
  background: ${(props) => props.background || ButtonColor};
  border-color: ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || White};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonLinkPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || "auto"};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  max-width: ${(props) => props.width || "auto"};
  text-decoration: none;
  text-align: center;
  font-size: ${ButtonLinkFontSize};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonHoverColor};
  }
`;

export const ButtonLinkAlt = styled.a<ComponentProps>`
  box-sizing: border-box;
  background: ${(props) => props.background || ButtonAltColor};
  border-color: ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || White};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonLinkPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || "auto"};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.width || "auto"};
  text-decoration: none;
  text-align: center;
  font-size: ${ButtonLinkFontSize};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonAltHoverColor};
  }
`;

export const ButtonLinkOutlined = styled.a<ComponentProps>`
  box-sizing: border-box;
  background: ${(props) => props.background || Transparent};
  border: ${ButtonOutlineBorder} solid
    ${(props) => props.borderColor || ButtonColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || ButtonColor};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonLinkPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || "auto"};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.width || "auto"};
  text-decoration: none;
  text-align: center;
  font-size: ${ButtonLinkFontSize};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonColor};
    color: ${White};
  }
`;

export const ButtonLinkOutlinedAlt = styled.a<ComponentProps>`
  box-sizing: border-box;
  background: ${(props) => props.background || Transparent};
  border: ${ButtonOutlineBorder} solid
    ${(props) => props.borderColor || ButtonAltColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || ButtonAltColor};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonLinkPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || "auto"};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  max-width: ${(props) => props.width || "auto"};
  text-decoration: none;
  text-align: center;
  font-size: ${ButtonLinkFontSize};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonAltColor};
    color: ${White};
  }
`;
