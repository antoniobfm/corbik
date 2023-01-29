import React from 'react';

import { Container } from './styles';
import { UnitListing } from './UnitListing';

const Units: React.FC = () => {
  return (
    <Container>
      <h3>Units</h3>
      <div className="list">
        <UnitListing name="Grams" amount={100} />
        <UnitListing name="Grams" amount={100} />
      </div>
      <button type="button">ADD UNIT</button>
    </Container>
  )
}

export default Units;