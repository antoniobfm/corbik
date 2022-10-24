import { MiniButton } from '@/components/MiniButton';
import { UserSquare } from 'iconsax-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Container } from './styles';

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href="/signup">
        <a>
          <MiniButton
            text="Create Account"
            icon={<UserSquare size="16" color="white" variant="Bulk" />}
          />
        </a>
      </Link>
      <h1>Sign in to your account</h1>
    </Container>
  )
}