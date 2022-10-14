import React from 'react';

import { Container } from './styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({text}: ButtonProps) => {
  return (
    <Container>
      {text}
    </Container>
  )
}