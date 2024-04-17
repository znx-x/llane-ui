import styled from "styled-components";

interface ComponentProps {
  background?: string;
  backgroundImage?: string;
  margin?: string;
  overflow?: string;
  padding?: string;
  width?: string;
}

export const AppWrapper = styled.div<ComponentProps>`
  background: ${(props) => props.background || "transparent"};
  background-image: ${(props) => props.backgroundImage || ""};
  margin: ${(props) => props.margin || "0"};
  overflow: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.margin || "1rem"};
`;

export const PageWrapper = styled.div<ComponentProps>`
  background: ${(props) => props.background || "transparent"};
  background-image: ${(props) => props.backgroundImage || ""};
  height: auto;
  margin: ${(props) => props.margin || "0"};
  max-height: 100%;
  overflow: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.margin || "1rem"};
  width: ${(props) => props.width};
  max-width: ${(props) => props.width || "1320px"};
`;
