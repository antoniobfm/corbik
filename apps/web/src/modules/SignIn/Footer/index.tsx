import { TertiaryButton } from '@/components/TertiaryButton';
import React from 'react';

import { Container } from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="divider" />
      <TertiaryButton text="Forgot your password?" />
    </Container>
  )
}