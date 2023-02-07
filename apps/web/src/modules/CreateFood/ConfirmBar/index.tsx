import { ConfirmActionButton } from '@/components/LogBar/styles';
import { useRouter } from 'next/router';
import React from 'react';

import { Container, GoBack, Menu } from './styles';

const ConfirmBar: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <div>
        <Menu>
          <GoBack onClick={() => router.back()}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M6 11L1 6L6 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </GoBack>
          <ConfirmActionButton>
            CREATE FOOD
          </ConfirmActionButton>
        </Menu>
      </div>
    </Container>
  )
}

export default ConfirmBar;