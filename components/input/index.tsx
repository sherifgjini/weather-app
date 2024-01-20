import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  border: boolean;
}
const InputElement = styled.input<{ $border: InputProps["border"] }>`
  background: #fff;
  padding: 2px 10px;
  height: 40px;
  border-radius: 20px;
  width: 100%;
  outline: none;
  border: ${(props) => (props.$border ? "1px solid #999;" : "none")};
`;
const Input: React.FC<InputProps> = ({ border, ...props }) => {
  return <InputElement {...props} $border={border} />;
};

export default Input;
