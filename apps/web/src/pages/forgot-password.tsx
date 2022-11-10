import React from 'react';

import { Container } from '@/modules/ForgotPassword/styles';
import { Header } from '@/modules/ForgotPassword/Header';
import { Form } from '@/modules/ForgotPassword/Form';
import { Everything } from '@/components/Container/styles';

const pages: React.FC = () => {
  return (
    <Everything>
      <Container>
        <Header />
        <Form />
      </Container>
    </Everything>
  )
}

export default pages;