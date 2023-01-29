import { Input } from '@/components/Input';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Container, DoubleColumn } from './styles';

const Summary: React.FC = () => {
  const control = useForm().control;

  return (
    <Container>
      <h3>Summary</h3>
      <Input
        name="name"
        label={{
          text: 'Name',
          position: 'inside'
        }}
        type="text"
        control={control} />
        <DoubleColumn>
          <Input
            name="brand"
            label={{
              text: 'Brand',
              position: 'inside'
            }}
            type="text"
            control={control} />

          <Input
            name="barcode"
            label={{
              text: 'Barcode',
              position: 'inside'
            }}
            type="text"
            control={control} />
        </DoubleColumn>
    </Container>
  )
}

export default Summary;