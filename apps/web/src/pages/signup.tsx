import { Everything } from '@/components/Container/styles';
import { Form } from '@/modules/SignUp/Form';
import { Header } from '@/modules/SignUp/Header';
import { Container } from '@/modules/SignUp/styles';
import React from 'react';

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