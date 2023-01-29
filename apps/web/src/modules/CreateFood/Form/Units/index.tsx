import React from 'react';

import { Container } from './styles';
import UnitListing from './UnitListing';

const Units: React.FC = () => {
  return (
    <Container>
      <h3>Units</h3>
      <UnitListing />
    </Container>
  )
}

export default Units;