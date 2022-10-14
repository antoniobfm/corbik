import { MiniButton } from '@/components/MiniButton';
import { UserSquare } from 'iconsax-react';
import React from 'react';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <MiniButton 
        text="Sign Up" 
        icon={<UserSquare size="16" color="white" variant="Bulk" />} 
      />
      <h1>Sign in to your account</h1>
    </Container>
  )
}