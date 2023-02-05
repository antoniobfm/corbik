import React from 'react';

import { Container } from './styles';

interface HorizontalLogProps {
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
  onClick: () => void;
}

const HorizontalLog: React.FC<HorizontalLogProps> = ({ name, amount, unit, calories, macros, when, onClick }: HorizontalLogProps) => {
  return (
    <Container 
      carbPerc={Math.floor(55)}
      protsPerc={Math.floor(35)}
      fatPerc={Math.floor(25)}
      onClick={onClick}
    >
      <div className="header">
        <div className="title">
          <h4>{name}</h4>
          <h5>{amount}{unit.short_name} - {calories}kcal</h5>
        </div>
        <time>09:09</time>
      </div>
			<div className="card--macros">
				<h4 style={{ color: "#EB5757" }}>C{macros.carbs}</h4>
				<h4 style={{ color: "#2D9CDB" }}>P{macros.proteins}</h4>
				<h4 style={{ color: "#F2C94C" }}>F{macros.fats}</h4>
				<div className="pie"></div>
			</div>
    </Container>
  )
}

export default HorizontalLog;