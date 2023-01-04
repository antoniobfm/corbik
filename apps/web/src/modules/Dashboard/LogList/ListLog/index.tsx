import React from 'react';

import { Container } from './styles';

interface ListLogProps {
  name: string;
  amount: number;
  unit: {
    short_name: string;
  }
  calories: number;
  macros: {
    carbs: number;
    proteins: number;
    fats: number;
  }
  when: string;
}

const ListLog: React.FC<ListLogProps> = ({ name, amount, unit, calories, macros, when }: ListLogProps) => {
  return (
    <Container>
      <div className="header">
        <time>20:00</time>
        <div className="title">
          <h4>{name}</h4>
          <h5>{amount + unit.short_name}</h5>
        </div>
      </div>
      <h5>C{macros.carbs} P{macros.proteins} F{macros.fats}</h5>
    </Container>
  )
}

export default ListLog;