import React from 'react';

import { Container } from './styles';

export interface TertiaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const TertiaryButton: React.FC<TertiaryButtonProps> = ({ text, ...rest }: TertiaryButtonProps) => {
  return (
    <Container {...rest}>
      {text}
    </Container>
  )
}