import React from 'react';

import { Container } from './styles'

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  brand: string;
  calories: number;
  macros: {
    carbs: number;
    prots: number;
    fats: number;
  }
}

export const FoodListing: React.FC<IProps> = ({ brand, name, calories, macros, ...rest }: IProps) => {
  return (
    <Container {...rest}>
      <div className="title">
        <h5>{brand}</h5>
        <h4>{name}</h4>
      </div>
      <div className="macros">
        <h5>{calories}</h5>
        <h5>{macros.carbs}C {macros.prots}P {macros.fats}F</h5>
      </div>
    </Container>
  )
}