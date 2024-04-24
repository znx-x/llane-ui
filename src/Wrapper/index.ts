import styled from "styled-components";
import { AppBackground, Transparent } from "../Colors";
import {
  AppWrapperAlignHorizontal,
  AppWrapperAlignVertical,
  PageWrapperMargin,
  PageWrapperOverflow,
  PageWrapperPadding,
  PageWrapperDefaultWidth,
  AppWrapperDefaultWidth,
  AppWrapperMargin,
  AppWrapperOverflow,
  AppWrapperPadding
} from "../BaseThemeStyle";

interface ComponentProps {
  background?: string;
  backgroundImage?: string;
  margin?: string;
  overflow?: string;
  padding?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
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
  // Custom alignment mappings
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

  return direction ? alignments[direction] || direction : defaultValue;
};

export const AppWrapper = styled.div<ComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    translateAlignment(
      props.alignHorizontal,
      "horizontal",
      AppWrapperAlignHorizontal
    )};
  justify-content: ${(props) =>
    translateAlignment(
      props.alignVertical,
      "vertical",
      AppWrapperAlignVertical
    )};
  background: ${(props) => props.background || AppBackground};
  background-image: ${(props) => `url(${props.backgroundImage})` || "none"};
  margin: ${(props) => props.margin || AppWrapperMargin};
  overflow: ${(props) => props.overflow || AppWrapperOverflow};
  padding: ${(props) => props.padding || AppWrapperPadding};
  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.maxWidth || AppWrapperDefaultWidth};
  min-width: ${(props) => props.minWidth || 'auto'};
  min-height: ${(props) => props.height || '100vh'};
  max-height: ${(props) => props.maxHeight || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;

export const PageWrapper = styled.div<ComponentProps>`
  height: ${(props) => props.height || 'auto'};
  min-height: ${(props) => props.minHeight || 'auto'};
  max-height: ${(props) => props.maxHeight || 'auto'};
  background: ${(props) => props.background || Transparent};
  background-image: ${(props) => props.backgroundImage || "none"};
  margin: ${(props) => props.margin || PageWrapperMargin};
  overflow: ${(props) => props.margin || PageWrapperOverflow};
  padding: ${(props) => props.margin || PageWrapperPadding};
  width: ${(props) => props.width || PageWrapperDefaultWidth};
  max-width: ${(props) => props.maxWidth || PageWrapperDefaultWidth};
  min-width: ${(props) => props.minWidth || 'auto'};
  @media (max-width: ${PageWrapperDefaultWidth}) {
    width: auto;
  }
`;
