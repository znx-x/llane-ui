import styled from "styled-components";

interface ComponentProps {
  background?: string;
  borderColor?: string;
}

export const Button = styled.button<ComponentProps>`
  background: ${(props) => props.background || "transparent"};
  border-color: ${(props) => props.borderColor || "transparent"};
`;
