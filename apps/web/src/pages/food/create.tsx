import React from 'react';

import { Container } from '@/modules/CreateFood/styles';
import Header from '@/modules/CreateFood/Header';
import Form from '@/modules/CreateFood/Form';

const CreateFood: React.FC = () => {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  )
}

export default CreateFood;