import React from 'react';

import { AddCustom, Container, UnitOption } from './styles';

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
        <UnitOption>
          <h4>Pound mass (lb)</h4>
          <span>Imperial</span>
        </UnitOption>
        <UnitOption>
          <h4>Ounce mass (oz)</h4>
          <span>Imperial</span>
        </UnitOption>
      </div>
      <AddCustom>
        <input type="text" placeholder="Add custom unit" />
        <button type="button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.33325V12.6666" stroke="#D5F6E3" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.3335 8H12.6668" stroke="#D5F6E3" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </AddCustom>
    </Container>
  )
}

export default UnitToAdd;