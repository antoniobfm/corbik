import { MiniButton } from '@/components/MiniButton';
import { UserSquare } from 'iconsax-react';
import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Link href="/signin">
        <a>
          <MiniButton
            text="Sign In"
            icon={<UserSquare size="16" color="white" variant="Bulk" />}
          />
        </a>
      </Link>
      <h1>Create Account</h1>
    </Container>
  )
}