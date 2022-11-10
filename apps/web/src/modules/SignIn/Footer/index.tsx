import { TertiaryButton } from '@/components/TertiaryButton';
import { useRouter } from 'next/router';
import React from 'react';

import { Container } from './styles';

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="divider" />
      <TertiaryButton onClick={() => router.push('/forgot-password')} text="Forgot your password?" />
    </Container>
  )
}