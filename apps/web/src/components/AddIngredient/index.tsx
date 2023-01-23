import React from 'react';
import { CurrentSelectedIngredient } from './CurrentSelectedIngredient';


import { Container } from './styles';

export const AddIngredient: React.FC = () => {

  return (
    <Container>
      <CurrentSelectedIngredient />
    </Container>
  )
}