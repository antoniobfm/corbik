import React from 'react';

import { Container } from '@/modules/CreateFood/styles';
import Header from '@/modules/CreateFood/Header';
import Form from '@/modules/CreateFood/Form';
import ConfirmBar from '@/modules/CreateFood/ConfirmBar';

const CreateFood: React.FC = () => {
  return (
    <Container>
      <Header />
      <Form />
      <ConfirmBar />
    </Container>
  )
}

export default CreateFood;