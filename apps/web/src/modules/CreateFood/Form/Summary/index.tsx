import { Input } from '@/components/Input';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Container } from './styles';

const Summary: React.FC = () => {
  const control = useForm().control;

  return (
    <Container>
      <Input name="name" type="text" placeholder="teste" control={control} />
    </Container>
  )
}

export default Summary;