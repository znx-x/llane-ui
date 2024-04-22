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
}

export const Button = styled.button<ComponentProps>`
  background: ${(props) => props.background || ButtonColor};
  border-color: ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || White};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || 'auto'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.width || 'auto'};
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
  margin: ${(props) => props.margin || 'auto'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.width || 'auto'};
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
  margin: ${(props) => props.margin || 'auto'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.width || 'auto'};
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
  margin: ${(props) => props.margin || 'auto'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.width || 'auto'};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonAltColor};
    color: ${White};
  }
`;

export const ButtonLink = styled.a<ComponentProps>`
  background: ${(props) => props.background || ButtonColor};
  border-color: ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || White};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonLinkPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || 'auto'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.width || 'auto'};
  text-decoration: none;
  text-align: center;
  font-size: ${ButtonLinkFontSize};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonHoverColor};
  }
`;

export const ButtonLinkAlt = styled.a<ComponentProps>`
  background: ${(props) => props.background || ButtonAltColor};
  border-color: ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || White};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonLinkPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || 'auto'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.width || 'auto'};
  text-decoration: none;
  text-align: center;
  font-size: ${ButtonLinkFontSize};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonAltHoverColor};
  }
`;

export const ButtonLinkOutlined = styled.a<ComponentProps>`
  background: ${(props) => props.background || Transparent};
  border: ${ButtonOutlineBorder} solid
    ${(props) => props.borderColor || ButtonColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || ButtonColor};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonLinkPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || 'auto'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.width || 'auto'};
  text-decoration: none;
  text-align: center;
  font-size: ${ButtonLinkFontSize};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonColor};
    color: ${White};
  }
`;

export const ButtonLinkOutlinedAlt = styled.a<ComponentProps>`
  background: ${(props) => props.background || Transparent};
  border: ${ButtonOutlineBorder} solid
    ${(props) => props.borderColor || ButtonAltColor};
  border-radius: ${(props) => props.borderRadius || BorderRadius};
  color: ${(props) => props.fontColor || ButtonAltColor};
  cursor: ${ButtonCursor};
  padding: ${(props) => props.padding || ButtonLinkPadding};
  font-weight: ${ButtonFontWeight};
  margin: ${(props) => props.margin || 'auto'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.width || 'auto'};
  text-decoration: none;
  text-align: center;
  font-size: ${ButtonLinkFontSize};
  &:hover {
    background: ${(props) => props.backgroundHover || ButtonAltColor};
    color: ${White};
  }
`;
