import React from 'react';

import { Container } from '@/modules/SignIn/styles';
import { Header } from '@/modules/SignIn/Header';
import { Form } from '@/modules/SignIn/Form';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  )
}

export default SignIn;