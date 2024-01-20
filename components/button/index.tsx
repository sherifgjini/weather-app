import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type buttonType = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  large: boolean;
  children: ReactNode;
}

const ButtonElement = styled.button<{ $large?: boolean }>`
  background: transparent;
  padding: ${(props) => (props.$large ? "2px 6px" : "6px 12px")};
  border: 0;
  border-radius: 6px;
  font-weight: 600;
  outline: 0;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.4s;
  max-height: 40px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Button: React.FC<ButtonProps> = ({ large, children, ...props }) => {
  return (
    <ButtonElement {...props} $large={large}>
      {children}
    </ButtonElement>
  );
};

export default Button;
