import React, {
  useState,
  ReactNode,
  ReactElement,
  ButtonHTMLAttributes,
  cloneElement,
  Children,
  useRef
} from "react";
import styled from "styled-components";
import {
  ComponentBackground,
  DarkBorderColor,
  DropdownLinkHoverBackground,
  TextColor,
  Text,
  IcoChevronDown,
  Sp,
  Span
} from "..";
import {
  BorderThickness,
  DropdownButtonBorderRadius,
  DropdownContainerBorderRadius,
  DropdownContainerPadding,
  DropdownFontSize,
  DropdownLinkPadding,
  DropdownPadding
} from "../BaseThemeStyle";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

interface ComponentProps {
  color?: string;
  colorHover?: string;
  size?: string;
  weight?: string;
  decoration?: string;
  decorationHover?: string;
  background?: string;
  backgroundHover?: string;
  padding?: string;
  borderRadius?: string;
  borderThickness?: string;
  borderColor?: string;
  minWidth?: string;
  boxShadow?: string;
  isOpen?: boolean;
  mobileBreakingPoint?: string;
  title?: string;
  fontColor?: string;
  fontSize?: string;
  margin?: string;
  width?: string;
}

export const DropdownLink = styled.a<ComponentProps>`
  display: block;
  padding: ${(props) => props.padding || DropdownLinkPadding};
  color: ${(props) => props.color || TextColor};
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.backgroundHover || DropdownLinkHoverBackground};
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
`;

const DropdownContainer = styled.div<ComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: calc(100% + 5px);
  background: ${ComponentBackground};
  padding: ${(props) => props.padding || DropdownContainerPadding};
  border-radius: ${DropdownContainerBorderRadius};
  border-top: none;
  border-bottom: ${BorderThickness} solid ${DarkBorderColor};
  border-left: ${BorderThickness} solid ${DarkBorderColor};
  border-right: ${BorderThickness} solid ${DarkBorderColor};
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  width: 240px;
  z-index: 1000;
`;

const DropdownToggle = styled.div<ComponentProps>`
  background: ${ComponentBackground};
  border: ${BorderThickness} solid ${DarkBorderColor};
  border-radius: ${DropdownButtonBorderRadius};
  color: ${TextColor};
  font-size: ${DropdownFontSize};
  padding: ${DropdownPadding};
  cursor: pointer;
  text-align: center;
  width: 240px;
  box-sizing: border-box;
`;

interface DropdownProps {
  children: ReactNode | ReactNode[];
  title?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  title = "Dropdown Title"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => {
    setIsOpen(false);
  });

  const cloneWithClickHandler = (child: ReactElement) => {
    const originalOnClick = child.props.onClick;

    const handleChildClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      originalOnClick?.(event); // Safely call the original onClick if it exists
      setIsOpen(false);
    };

    return cloneElement(child, { onClick: handleChildClick });
  };

  const enhancedChildren = Children.map(children, (child) =>
    React.isValidElement(child) ? cloneWithClickHandler(child) : child
  );

  return (
    <DropdownWrapper ref={node as any}>
      <DropdownToggle onClick={() => setIsOpen(!isOpen)}>
        <Text>
          {title}
          <Sp />
          <Span>
            <IcoChevronDown size="0.9rem" margin="auto auto -3px auto" />
          </Span>
        </Text>
      </DropdownToggle>
      {isOpen && <DropdownContainer>{enhancedChildren}</DropdownContainer>}
    </DropdownWrapper>
  );
};
