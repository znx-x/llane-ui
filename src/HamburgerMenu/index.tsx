import React, { useState, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { IcoChevronDown, IcoMenu, IcoX } from "../Icons";
import {
  BorderColor,
  ComponentBackground,
  DimmedTextColor,
  HamburgerMenuLinkHoverBackground,
  Sp,
  TextColor,
  Text,
  Span,
  DarkBorderColor
} from "..";
import {
  HamburgerMenuBoxShadow,
  HamburgerMenuContainerBorderRadius,
  HamburgerMenuContainerBorderThickness,
  HamburgerMenuContainerMinWidth,
  HamburgerMenuContainerPadding,
  HamburgerMenuDropdownFontSize,
  HamburgerMenuLinkPadding,
  HeaderMobileBreakingPoint
} from "../BaseThemeStyle";

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
}

export const HamburgerMenuLink = styled.a<ComponentProps>`
  display: block;
  padding: ${(props) => props.padding || HamburgerMenuLinkPadding};
  color: ${(props) => props.color || TextColor};
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.backgroundHover || HamburgerMenuLinkHoverBackground};
  }
`;

export const HamburgerMenuDropdownLink = styled.a<ComponentProps>`
  display: block;
  padding: ${(props) => props.padding || HamburgerMenuLinkPadding};
  color: ${(props) => props.color || TextColor};
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.backgroundHover || HamburgerMenuLinkHoverBackground};
  }
`;

const DropdownContent = styled.div<ComponentProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  color: ${DimmedTextColor};
  font-size: ${HamburgerMenuDropdownFontSize};
  width: 100%;
  min-width: ${(props) => props.minWidth || HamburgerMenuContainerMinWidth};
  z-index: 1;
  background: ${DarkBorderColor};
`;

interface HamburgerMenuDropdownProps {
  children: ReactNode;
  title?: string;
}

export const HamburgerMenuDropdown: React.FC<HamburgerMenuDropdownProps> = ({
  children,
  title = "Dropdown Title"
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenuLink as="div" onClick={() => setOpen(!isOpen)}>
        <Text>
          {title}
          <Sp />
          <Span>
            <IcoChevronDown size="0.9rem" margin="auto auto -3px auto" />
          </Span>
        </Text>
      </HamburgerMenuLink>
      <DropdownContent isOpen={isOpen}>{children}</DropdownContent>
    </>
  );
};

const MenuWrapper = styled.div`
  position: relative;
`;

const MenuContainer = styled.div<ComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 100%;
  right: auto;
  left: auto;
  width: inherit;
  min-width: ${(props) => props.minWidth || HamburgerMenuContainerMinWidth};
  background: ${(props) => props.background || ComponentBackground};
  padding: ${(props) => props.padding || HamburgerMenuContainerPadding};
  border-radius: ${(props) =>
    props.borderRadius || HamburgerMenuContainerBorderRadius};
  border: ${(props) =>
      props.borderThickness || HamburgerMenuContainerBorderThickness}
    solid ${(props) => props.borderColor || BorderColor};
  box-shadow: ${(props) => props.boxShadow || HamburgerMenuBoxShadow};
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  @media (max-width: calc(${(props) =>
      props.mobileBreakingPoint || HeaderMobileBreakingPoint} + 1px)) {
    width: 92vw;
  }
`;

const MenuToggle = styled.div`
  cursor: pointer;
`;

interface HamburgerMenuProps {
  children: ReactNode;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Using HTMLDivElement as the type for the ref to attach to div elements
  const toggleRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (toggleRef.current) {
        const rect = toggleRef.current.getBoundingClientRect();
        const rightSpace = window.innerWidth - rect.right;

        if (rightSpace < rect.width) {
          setMenuStyle({ right: 0 });
        } else {
          setMenuStyle({ left: 0 });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MenuWrapper>
      <MenuToggle ref={toggleRef} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IcoX size="42px" /> : <IcoMenu size="42px" />}
      </MenuToggle>
      {isOpen && <MenuContainer style={menuStyle}>{children}</MenuContainer>}
    </MenuWrapper>
  );
};
