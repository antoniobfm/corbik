import React from 'react';

import { ProgressBar } from './ProgressBar';
import { Container } from './styles';
import nutrients from '../../../data/nutrients.json';
import { INutrients } from '..';

interface NutrientProps {
  type: INutrients;
  value: number;
}

export const Nutrient: React.FC<NutrientProps> = ({ type, value }: NutrientProps) => {
  
  return (
    <Container type={type}>
      <div className="header">
        <h4>{nutrients[type].name_short}</h4>
        <h4 style={{ fontWeight: 400 }}>{value}</h4>
      </div>
      <ProgressBar value={value} type={type} />
    </Container>
  )
}