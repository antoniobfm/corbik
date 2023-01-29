import React from 'react';
import Macronutrients from './Macronutrients';

import { Container } from './styles';
import Summary from './Summary';
import Units from './Units';

const Form: React.FC = () => {
  return (
    <Container>
      <Summary />
      <Macronutrients />
      <Units />
    </Container>
  )
}

export default Form;