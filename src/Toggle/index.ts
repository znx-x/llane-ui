import styled from "styled-components";
import { AppBackground, ComponentBackground, BorderColor, TextColor, PrimaryColor, White } from "../Colors";

interface ComponentProps {
  toggled?: boolean;
}

export const ToggleButton = styled.button<ComponentProps>`
  background: ${(props) => (props.toggled ? PrimaryColor : ({ theme }) => theme.mode === 'light' ? AppBackground({ theme }) : ComponentBackground({ theme }))};
  border: 2px solid ${({ theme }) => BorderColor({ theme })};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.toggled ? 'flex-end' : 'flex-start')};
  padding: 3px;
  width: 50px;
  height: 24px;
  position: relative;
  transition: justify-content 0.3s ease, background 0.3s ease;

  &::before {
    content: '';
    background: ${(props) => (props.toggled ? White : ({ theme }) => TextColor({ theme }))};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    transition: background-color 0.3s ease;
  }
`;
