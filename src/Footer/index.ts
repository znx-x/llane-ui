import styled from "styled-components";
import { TextColor, Transparent, FooterBackground } from "../Colors";
import {
  FooterHeight,
  FooterBoxShadow,
  FooterBackdropFilter,
  FooterBorderRadius,
  FooterMargin,
  FooterFloatingMargin,
  FooterFloatingBorderRadius,
  BorderThickness,
  PageWrapperDefaultWidth,
  DefaultGap,
  FooterPadding,
  FooterSectionPadding,
  FooterMobileBreakingPoint
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

export const Footer = styled.div<ComponentProps>`
  width: ${(props) => (props.floating ? "auto" : "100%")};
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: ${(props) => (props.sticky ? "sticky" : "static")};
  padding: ${(props) => props.padding || FooterPadding};
  bottom: ${(props) =>
    props.sticky ? (props.floating ? FooterFloatingMargin : "0") : "auto"};
  background: ${(props) => props.background || FooterBackground};
  color: ${(props) => props.color || TextColor};
  border-bottom: ${(props) => props.borderThickness || BorderThickness} solid
    ${(props) => props.borderColor || Transparent};
  height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.minHeight || FooterHeight};
  box-shadow: ${(props) => props.boxShadow || FooterBoxShadow};
  backdrop-filter: ${(props) =>
    props.glassEffect ? FooterBackdropFilter : "none"};
  margin: ${(props) =>
    props.floating
      ? props.margin || FooterFloatingMargin
      : props.margin || FooterMargin};
  border-radius: ${(props) =>
    props.floating
      ? props.borderRadius || FooterFloatingBorderRadius
      : props.borderRadius || FooterBorderRadius};
      @media (max-width: calc(${(props) =>
        props.mobileBreakingPoint || FooterMobileBreakingPoint} + 1px)) {
      flex-direction: column;
        }
`;

export const FooterDesktop = styled.div<ComponentProps>`
  display: none;
  @media (min-width: calc(${(props) =>
      props.mobileBreakingPoint || FooterMobileBreakingPoint} + 1px)) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    gap: ${(props) => props.gap || DefaultGap};
  }
`;

export const FooterMobile = styled.div<ComponentProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  gap: ${(props) => props.gap || DefaultGap};
  @media (min-width: calc(${(props) =>
      props.mobileBreakingPoint || FooterMobileBreakingPoint} + 1px)) {
    display: none;
  }
`;

export const FooterContainer = styled.div<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width || PageWrapperDefaultWidth};
  height: 100%;
  margin: auto;
  gap: ${(props) => props.gap || DefaultGap};
`;

export const FooterSection = styled.div<ComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    translateAlignment(props.alignHorizontal, "horizontal", "center")};
  justify-content: ${(props) =>
    translateAlignment(props.alignVertical, "vertical", "flex-start")};
  height: 100%;
  width: 100%;
  padding: ${FooterSectionPadding};
  margin: ${(props) => props.margin || "0"};
`;
