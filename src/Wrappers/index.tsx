import styled from "styled-components";

interface ComponentProps {
  background?: string;
  backgroundImage?: string;
  margin?: string;
  overflow: string;
  padding?: string;
  width?: string;
}

export const AppWrapper = styled.div<ComponentProps>`
  background: ${(props) => props.background || "transparent"};
  background-image: ${(props) => props.backgroundImage || ""};
  height: 100vh;
  margin: ${(props) => props.margin || "0"};
  overflow: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.margin || "1rem"};
  width: 100vw;
`;

export const PageWrapper = styled.div<ComponentProps>`
  background: ${(props) => props.background || "transparent"};
  background-image: ${(props) => props.backgroundImage || ""};
  height: auto;
  margin: ${(props) => props.margin || "0"};
  max-height: 100%;
  max-width: 100%;
  overflow: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.margin || "1rem"};
  width: ${(props) => props.width || "1320px"};
`;
