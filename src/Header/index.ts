import styled from "styled-components";
import {
  TextColor,
  Transparent,
  HeaderBackground,
  HeaderLinkHoverBackground
} from "../Colors";
import {
  HeaderHeight,
  HeaderBoxShadow,
  HeaderBackdropFilter,
  HeaderBorderRadius,
  HeaderMargin,
  HeaderFloatingMargin,
  HeaderFloatingBorderRadius,
  BorderThickness,
  PageWrapperDefaultWidth,
  DefaultGap,
  HeaderPadding,
  HeaderSectionPadding,
  HeaderMobileBreakingPoint
} from "../BaseThemeStyle";

interface ComponentProps {
  background?: string;
  backgroundHover?: string;
  color?: string;
  height?: string;
  minHeight?: string;
  boxShadow?: string;
  sticky?: boolean;
  glassEffect?: boolean;
  borderThickness?: string;
  borderColor?: string;
  margin?: string;
  borderRadius?: string;
  floating?: boolean;
  size?: string;
  weight?: string;
  decoration?: string;
  decorationHover?: string;
  colorHover?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  maxHeight?: string;
  gap?: string;
  padding?: string;
  mobileBreakingPoint?: string;
  alignHorizontal?:
    | "left"
    | "right"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  alignVertical?:
    | "top"
    | "bottom"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

const translateAlignment = (
  direction: string | undefined,
  orientation: "horizontal" | "vertical",
  defaultValue: string
) => {
  const alignments: Record<string, string> = {
    top: "flex-start",
    bottom: "flex-end",
    left: "flex-start",
    right: "flex-end",
    center: "center",
    stretch: "stretch",
    baseline: "baseline",
    "space-between": "space-between",
    "space-around": "space-around",
    "space-evenly": "space-evenly"
  };

  const result = direction ? alignments[direction] || direction : defaultValue;
  return result;
};

export const Header = styled.div<ComponentProps>`
  width: ${(props) => (props.floating ? "auto" : "100%")};
  min-width: ${(props) => props.minWidth || 'auto'};
  max-width: ${(props) => props.maxWidth || 'auto'};
  z-index: 999;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  position: ${(props) => (props.sticky ? "sticky" : "static")};
  padding: ${(props) => props.padding || HeaderPadding};
  top: ${(props) =>
    props.sticky ? (props.floating ? HeaderFloatingMargin : "0") : "auto"};
  background: ${(props) => props.background || HeaderBackground};
  color: ${(props) => props.color || TextColor};
  border-bottom: ${(props) => props.borderThickness || BorderThickness} solid
    ${(props) => props.borderColor || Transparent};
  height: ${(props) => props.height || HeaderHeight};
  min-height: ${(props) => props.minHeight || HeaderHeight};
  max-height: ${(props) => props.maxHeight || 'auto'};
  box-shadow: ${(props) => props.boxShadow || HeaderBoxShadow};
  backdrop-filter: ${(props) =>
    props.glassEffect ? HeaderBackdropFilter : "none"};
  margin: ${(props) =>
    props.floating
      ? props.margin || HeaderFloatingMargin
      : props.margin || HeaderMargin};
  border-radius: ${(props) =>
    props.floating
      ? props.borderRadius || HeaderFloatingBorderRadius
      : props.borderRadius || HeaderBorderRadius};
`;

export const HeaderDesktop = styled.div<ComponentProps>`
  display: none;
  @media (min-width: calc(${(props) =>
      props.mobileBreakingPoint || HeaderMobileBreakingPoint} + 1px)) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    gap: ${(props) => props.gap || DefaultGap};
  }
`;

export const HeaderMobile = styled.div<ComponentProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  gap: ${(props) => props.gap || DefaultGap};
  @media (min-width: calc(${(props) =>
      props.mobileBreakingPoint || HeaderMobileBreakingPoint} + 1px)) {
    display: none;
  }
`;

export const HeaderContainer = styled.div<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width || PageWrapperDefaultWidth};
  height: 100%;
  margin: auto;
  gap: ${(props) => props.gap || DefaultGap};
`;

export const HeaderSection = styled.div<ComponentProps>`
  display: flex;
  align-items: ${(props) =>
    translateAlignment(props.alignVertical, "vertical", "center")};
  justify-content: ${(props) =>
    translateAlignment(props.alignHorizontal, "horizontal", "center")};
  height: 100%;
  padding: ${HeaderSectionPadding};
  margin: ${(props) => props.margin || '0'};
`;

export const HeaderLink = styled.a<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  color: ${(props) => props.color || TextColor};
  font-size: ${(props) => props.size || "auto"};
  font-weight: ${(props) => props.weight || "normal"};
  text-decoration: ${(props) => props.decoration || "none"};
  padding: 0 1rem;
  background: ${(props) => props.background || Transparent};
  &:hover {
    color: ${(props) => props.colorHover || TextColor};
    text-decoration: ${(props) => props.decorationHover || "none"};
    background: ${(props) =>
      props.backgroundHover || HeaderLinkHoverBackground};
  }
`;
