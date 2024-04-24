import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { IcoMenu, IcoX } from '../Icons';
import { BorderColor, ComponentBackground, HamburgerMenuLinkHoverBackground, TextColor } from '..';
import { HamburgerMenuContainerBorderRadius, HamburgerMenuContainerBorderThickness, HamburgerMenuContainerPadding } from '../BaseThemeStyle';

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
}

export const HamburgerMenuLink = styled.a<ComponentProps>`
  display: block;  // Changed from flex to block for full width
  padding: 10px 15px;  // Adjust padding as needed
  color: ${props => props.color || TextColor};
  text-decoration: none;
  width: 100%;  // Ensure it takes full width
  cursor: pointer;
  &:hover {
    background-color: ${props => props.backgroundHover || HamburgerMenuLinkHoverBackground};
  }
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  // position: absolute;
  // background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  left: 0;
  right: 0;
`;

interface HamburgerMenuDropdownProps {
  children: ReactNode;
}

export const HamburgerMenuDropdown: React.FC<HamburgerMenuDropdownProps> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenuLink as="div" onClick={() => setOpen(!isOpen)}>Dropdown</HamburgerMenuLink>
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
  right: 0;
  width: 100%;
  min-width: 150px;
  background: ${props => props.background || ComponentBackground};
  padding: ${props => props.padding || HamburgerMenuContainerPadding};
  border-radius: ${props => props.borderRadius || HamburgerMenuContainerBorderRadius};
  border: ${props => props.borderThickness || HamburgerMenuContainerBorderThickness} solid ${props => props.borderColor || BorderColor};
  overflow-x: hidden;
  overflow-y: auto;
`;

const MenuToggle = styled.div`
  cursor: pointer;
`;

interface HamburgerMenuProps {
  children: ReactNode;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuWrapper>
      <MenuToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IcoX /> : <IcoMenu />}
      </MenuToggle>
      {isOpen && <MenuContainer>{children}</MenuContainer>}
    </MenuWrapper>
  );
};
