import React from 'react';

import { Container } from './styles';

export interface IngredientsProps {
  brand: string;
  name: string;
  macros: {
    calories: number;
    carbs: number;
    prots: number;
    fats: number;
  }
  amount: number;
  unit: {
    name: string;
    short: string;
  }
}

export const Ingredient: React.FC<IngredientsProps> = (ingredient: IngredientsProps) => {
  return (
    <Container>
      <div className="header">
        <h5>{ingredient.brand}</h5>
        <h4>{ingredient.name}</h4>
      </div>
      <div className="amount">
        <div className="macros">
          <span>{ingredient.macros.calories} {ingredient.macros.calories > 1 ? "kcals" : "kcal"}</span>
          <span>C{ingredient.macros.carbs} P{ingredient.macros.prots} F{ingredient.macros.fats}</span>
        </div>
        <input type="number" defaultValue={ingredient.amount} />
      </div>
    </Container>
  )
}