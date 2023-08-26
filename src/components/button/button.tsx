import React from 'react';
import { Component } from './button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height?: number;
  width?: number;
  children: React.ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({
  height,
  width,
  children,
  ...props
}) => {
  return (
    <Component.Container height={height} width={width} {...props}>
      {children}
    </Component.Container>
  );
};

export default Button;
