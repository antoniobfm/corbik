import React from 'react';
import { INutrients } from '../..';

import { Container } from './styles';

interface IProgressBar {
  type: INutrients;
  value: number;
}

export const ProgressBar: React.FC<IProgressBar> = ({value, type}: IProgressBar) => {
  return (
    <Container value={value} type={type}>
      <div className="progress-bar" />
    </Container>
  )
}