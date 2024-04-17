import styled from "styled-components";
import { Gray } from ".";

interface ComponentProps {
  size?: string;
  weight?: string;
  decoration?: string;
  color?: string;
}

export const HeadingExtraLarge = styled.h1<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "3rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const HeadingLarge = styled.h2<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "2rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const Heading = styled.h3<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "1.5rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const HeadingSmall = styled.h4<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "1.2rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const HeadingExtraSmall = styled.h5<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "1rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const HeadingTiny = styled.h6<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "0.8rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const TextExtraLarge = styled.p<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "2rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const TextLarge = styled.p<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "1.5rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const Text = styled.p<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "1rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const TextSmall = styled.p<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "0.8rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const TextExtraSmall = styled.p<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size || "0.7rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;

export const TextDimmed = styled.p<ComponentProps>`
    margin: auto;
    color: ${(props) => props.color|| Gray};
    font-size: ${(props) => props.size || "1rem"};
    font-weight: ${(props) => props.weight || "normal"};
    text-decoration: ${(props) => props.decoration || "none"}
`;
