import styled from "styled-components";
import {
  TextColor,
  Transparent,
  AppNavBarBackground,
  AppNavBarSectionHoverBackground,
  AppNavBarSectionActiveBackground
} from "../Colors";
import {
  AppNavBarHeight,
  AppNavBarBoxShadow,
  AppNavBarBackdropFilter,
  AppNavBarBorderRadius,
  AppNavBarMargin,
  AppNavBarFloatingMargin,
  AppNavBarFloatingBorderRadius,
  BorderThickness,
  PageWrapperDefaultWidth,
  DefaultGap,
  AppNavBarPadding,
  AppNavBarSectionPadding,
  AppNavBarMobileBreakingPoint,
  AppNavBarDefaultPosition
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
  gap?: string;
  padding?: string;
  mobileBreakingPoint?: string;
  position?: string;
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

export const AppNavBar = styled.div<ComponentProps>`
  width: ${(props) => (props.floating ? "auto" : "100%")};
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: ${(props) => (props.sticky ? "sticky" : "static")};
  padding: ${(props) => props.padding || AppNavBarPadding};
  bottom: ${(props) =>
    props.sticky ? (props.floating ? AppNavBarFloatingMargin : "0") : "auto"};
  background: ${(props) => props.background || AppNavBarBackground};
  color: ${(props) => props.color || TextColor};
  border-bottom: ${(props) => props.borderThickness || BorderThickness} solid
    ${(props) => props.borderColor || Transparent};
  height: ${(props) => props.height || AppNavBarHeight};
  min-height: ${(props) => props.minHeight || AppNavBarHeight};
  box-shadow: ${(props) => props.boxShadow || AppNavBarBoxShadow};
  backdrop-filter: ${(props) =>
    props.glassEffect ? AppNavBarBackdropFilter : "none"};
  margin: ${(props) =>
    props.floating
      ? props.margin || AppNavBarFloatingMargin
      : props.margin || AppNavBarMargin};
  border-radius: ${(props) =>
    props.floating
      ? props.borderRadius || AppNavBarFloatingBorderRadius
      : props.borderRadius || AppNavBarBorderRadius};
  @media (min-width: calc(${(props) =>
      props.mobileBreakingPoint || AppNavBarMobileBreakingPoint} + 1px)) {
    display: none;
  }
`;

export const AppNavBarSection = styled.div<ComponentProps>`
  display: flex;
  align-items: ${(props) =>
    translateAlignment(props.alignVertical, "vertical", "center")};
  justify-content: ${(props) =>
    translateAlignment(props.alignHorizontal, "horizontal", "center")};
  height: 100%;
  width: 100%;
  padding: ${AppNavBarSectionPadding};
  margin: ${(props) => props.margin || "0"};
  &:hover {
    background: ${(props) =>
      props.backgroundHover || AppNavBarSectionHoverBackground};
  }
  &:active {
    background: ${(props) =>
      props.backgroundHover || AppNavBarSectionActiveBackground};
  }
`;
