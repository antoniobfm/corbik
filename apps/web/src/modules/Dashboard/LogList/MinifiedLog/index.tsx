import React from 'react';

import { Container } from './styles';

const MinifiedLog: React.FC = () => {
  return (
    <Container 
      carbPerc={Math.floor(55)}
      protsPerc={Math.floor(35)}
      fatPerc={Math.floor(25)}
    >
      <div className="header">
        <div className="title">
          <h4>Bacon em Fatias</h4>
          <h5>17g - 71kcal</h5>
        </div>
        <time >09:09</time>
      </div>
			<div className="card--macros">
				<h4 style={{ color: "#EB5757" }}>C55</h4>
				<h4 style={{ color: "#2D9CDB" }}>P25</h4>
				<h4 style={{ color: "#F2C94C" }}>F37</h4>
				<div className="pie"></div>
			</div>
    </Container>
  )
}

export default MinifiedLog;