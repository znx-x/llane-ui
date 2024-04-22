import styled from "styled-components";
import { DefaultGap, DividerLineThickness } from "../BaseThemeStyle";
import { BorderColor } from "../Colors";

interface ComponentProps {
  color?: string;
  gap?: string;
  thickness?: string;
}

export const Divider = styled.div<ComponentProps>`
  border-top: ${(props) => props.thickness || DividerLineThickness} solid
    ${(props) => props.color || BorderColor};
  margin-top: ${(props) => props.gap || DefaultGap};
  margin-bottom: ${(props) => props.gap || DefaultGap};
`;
