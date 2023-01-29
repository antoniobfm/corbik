import React from 'react';

import { Container } from './styles';
import Summary from './Summary';

const Form: React.FC = () => {
  return (
    <Container>
      <form>
        <Summary />
      </form>
    </Container>
  )
}

export default Form;