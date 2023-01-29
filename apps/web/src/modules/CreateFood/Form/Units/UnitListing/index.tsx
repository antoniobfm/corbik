import React from 'react';

import { Container } from './styles';

export interface UnitListingProps {
  name: string;
  amount: number;
}

export const UnitListing: React.FC<UnitListingProps> = (unit: UnitListingProps) => {
  return (
    <Container>
      <h4>{unit.name}</h4>
      <input type="number" defaultValue={unit.amount} placeholder="Amount" />
    </Container>
  )
}