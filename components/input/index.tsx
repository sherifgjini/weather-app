import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  border: boolean;
}

const Input: React.FC<InputProps> = ({ border, ...props }) => {
  return <input className="glass" {...props} />;
};

export default Input;
