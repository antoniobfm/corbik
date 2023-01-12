import { DateInput } from '@/components/DateInput';
import React from 'react';

import { Container } from './styles';

const When: React.FC = () => {
  return (
    <Container>
      <DateInput name="when" labelName="When" type="datetime-local" />
    </Container>
  )
}

export default When;