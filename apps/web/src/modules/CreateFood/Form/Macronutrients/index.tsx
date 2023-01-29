import { Input } from '@/components/Input';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Container, DoubleColumn } from './styles';

const Macronutrients: React.FC = () => {
  const control = useForm().control;

  return (
    <Container>
      <h3>Macronutrients</h3>
      <DoubleColumn>
        <Input
          name="carbs"
          label={{
            text: 'Carbohydrates',
            position: 'inside'
          }}
          type="number"
          control={control} />

        <Input
          name="prots"
          label={{
            text: 'Proteins',
            position: 'inside'
          }}
          type="number"
          control={control} />

        <Input
          name="fats"
          label={{
            text: 'Fats',
            position: 'inside'
          }}
          type="number"
          control={control} />
      </DoubleColumn>
      <Input
        name="calories"
        label={{
          text: 'Calories',
          position: 'inside'
        }}
        type="text"
        control={control} />
    </Container>
  )
}

export default Macronutrients;