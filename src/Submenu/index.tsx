import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import {
  ComponentBackground,
  SubmenuLinkHoverBackground,
  TextColor,
  Text,
  IcoChevronDown,
  Sp,
  Span,
  Transparent,
  HeaderLinkHoverBackground
} from "..";
import {
  BorderThickness,
  DefaultBoxShadow,
  HeaderHeight,
  SubmenuContainerBorderRadius,
  SubmenuContainerPadding,
  SubmenuFontSize,
  SubmenuLinkPadding,
  SubmenuPadding
} from "../BaseThemeStyle";

interface ComponentProps {
  padding?: string;
  color?: string;
  backgroundHover?: string;
  background?: string;
}

export const SubmenuLink = styled.a<ComponentProps>`
  display: block;
  background: ${(props) => props.background || Transparent};
  padding: ${(props) => props.padding || SubmenuLinkPadding};
  color: ${(props) => props.color || TextColor};
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.backgroundHover || SubmenuLinkHoverBackground};
  }
`;

const SubmenuWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const SubmenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: calc(100% - ${SubmenuContainerBorderRadius});
  background: ${ComponentBackground};
  padding: ${SubmenuContainerPadding};
  border-radius: ${SubmenuContainerBorderRadius};
  border: ${BorderThickness} solid ${Transparent};
  box-shadow: ${DefaultBoxShadow};
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  width: auto;
  min-width: 260px;
`;

const SubmenuToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Transparent};
  border: none;
  color: ${TextColor};
  font-size: ${SubmenuFontSize};
  padding: ${SubmenuPadding};
  cursor: pointer;
  text-align: center;
  width: auto;
  height: 100%;
  min-height: ${HeaderHeight};
  box-sizing: border-box;
  &:hover {
    color: ${TextColor};
    text-decoration: none;
    background: ${HeaderLinkHoverBackground};
  }
`;

interface SubmenuProps {
  children: ReactNode;
  title?: string;
}

export const Submenu: React.FC<SubmenuProps> = ({
  children,
  title = "Submenu Title"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SubmenuWrapper>
      <SubmenuToggle onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <Text>
          {title}
          <Sp />
          <Span>
            <IcoChevronDown size="0.9rem" margin="auto auto -3px auto" />
          </Span>
        </Text>
      </SubmenuToggle>
      {isOpen && <SubmenuContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>{children}</SubmenuContainer>}
    </SubmenuWrapper>
  );
};
