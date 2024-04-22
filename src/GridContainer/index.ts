import styled from "styled-components";
import { Transparent } from "../Colors";
import {
  BorderThickness,
} from "../BaseThemeStyle";

interface ComponentProps {
  background?: string;
  backgroundHover?: string;
  borderColor?: string;
  borderRadius?: string;
  borderThickness?: string;
  breakDirection?: string;
  gap?: string;
  margin?: string;
  padding?: string;
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
  alignText?: string;
}

// Helper function to translate alignment props to CSS values
const translateAlignment = (
  direction: string | undefined,
  orientation: "horizontal" | "vertical"
) => {
  if (!direction) return orientation === "vertical" ? "flex-start" : "stretch"; // Defaults if no direction provided

  // Custom alignment mappings
  const alignments: Record<string, string> = {
    top: "flex-start",
    bottom: "flex-end",
    left: "flex-start",
    right: "flex-end"
  };

  // Return the custom mapping or default to the provided value if not a custom key
  return alignments[direction] || direction;
};

export const GridContainer = styled.div<ComponentProps>`
  display: grid;
  align-items: ${(props) =>
    translateAlignment(props.alignHorizontal, "horizontal")};
  justify-content: ${(props) =>
    translateAlignment(props.alignVertical, "vertical")};
  background: ${(props) => props.background || Transparent};
  border: ${(props) => props.borderThickness || BorderThickness} solid
    ${(props) => props.borderColor || Transparent};
  border-radius: ${(props) => props.borderRadius};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.alignText || "left"};
  &:hover {
    background: ${(props) => props.backgroundHover};
  }
  @media (max-width: 769px) {
    width: auto;
  }
`;