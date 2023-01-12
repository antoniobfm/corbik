import React from 'react';

import { Container } from './styles';

const History: React.FC = () => {
  return (
    <Container>
      <h2>History</h2>
      <div className="list">
        <div className="item">
          <h3>5 days ago</h3>
          <h5>100g</h5>  
        </div>
        <div className="item">
          <h3>5 days ago</h3>
          <h5>100g</h5>  
        </div>
      </div>
    </Container>
  )
}

export default History;