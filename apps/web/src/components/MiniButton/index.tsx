import React from 'react';

import { Container } from './styles';

export interface IMiniButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: JSX.Element;
}

export const MiniButton: React.FC<IMiniButtonProps> = ({ text, icon, ...rest }: IMiniButtonProps) => {
  return (
    <Container>
      {icon}
      {text}
    </Container>
  )
}