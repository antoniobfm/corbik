import React from 'react';

import { Loading } from '@/components/Loading';

import { Container } from './styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, loading }: ButtonProps) => {

  return (
    <Container isLoading={loading}>
      {loading ? <Loading /> : text}
    </Container>
  )
}