import { useRef } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "../hooks/useOnClickOutside";



interface ComponentProps {
  width?: string;
  height?: string;
}

interface ModalProps extends ComponentProps {
  open: boolean;
  handleClose: () => void
  children: React.ReactNode
}


const ModalRoot = styled.div`
  position: fixed;
  z-index: 1300;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div<ComponentProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width ? props.width : '400px'};
  height: ${(props) => props.height ? props.height : 'inherit'};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
`

export const Modal = ({
  open,
  handleClose,
  children,
  ...props
}: ModalProps) => {
  const node = useRef<HTMLDivElement>();

  useOnClickOutside(node, handleClose)

  return (
    <>{ open && 
      <ModalRoot>
        <ModalContent ref={node as any} {...props}>
          {children}
        </ModalContent>
      </ModalRoot>
    }
    </>
  )
}
