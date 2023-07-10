import React from 'react';
import { Component } from './button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height?: number;
  width?: number;
  children: React.ReactNode | string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  height,
  width,
  children,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <Component.Container
      height={height}
      width={width}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component.Container>
  );
};

export default Button;
