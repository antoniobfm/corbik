import React from 'react';

import { Container, UnitOption } from './styles';

const UnitToAdd: React.FC = () => {
  return (
    <Container>
      <h3>Units</h3>
      <div className="list">
        <UnitOption>
          <h4>Grams</h4>
          <span>Metric</span>
        </UnitOption>
        <UnitOption>
          <h4>Mililigram (ml)</h4>
          <span>Metric</span>
        </UnitOption>
        <UnitOption>
          <h4>Liter (l)</h4>
          <span>Metric</span>
        </UnitOption>
        <UnitOption>
          <h4>Milliliter (ml)</h4>
          <span>Metric</span>
        </UnitOption>
      </div>
    </Container>
  )
}

export default UnitToAdd;