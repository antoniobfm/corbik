import React from 'react';

import { Container } from '@/modules/SignIn/styles';
import { Header } from '@/modules/SignIn/Header';
import { Form } from '@/modules/SignIn/Form';
import { Everything } from '@/components/Container/styles';
import { Footer } from '@/modules/SignIn/Footer';

const SignIn: React.FC = () => {
  return (
    <Everything>
      <Container>
        <Header />
        <Form />
        <Footer />
      </Container>
    </Everything>
  )
}

export default SignIn;