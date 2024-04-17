import styled from "styled-components";
import { DefaultGap } from "../BaseThemeStyle";

interface ComponentProps {
    gap?: string;
}

export const Spacer = styled.div<ComponentProps>`
    margin-top: ${(props) => props.gap || DefaultGap };
    margin-bottom: ${(props) => props.gap || DefaultGap };
    margin-left: 0;
    margin-right: 0;
`