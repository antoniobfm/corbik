import React, { useState } from 'react';

import { Container } from './styles';

export interface IProps {
  history: {
    when: string;
    amount: number;
    unit: {
      name: string;
      short: string
    }
  }[]
}

const History: React.FC<IProps> = ({history}: IProps) => {
  const [display, setDisplay] = useState<"expanded" | "collapsed">("collapsed");

  const toggleDisplay = () => {
    if (display === "collapsed") {
      setDisplay("expanded");
    } else {
      setDisplay("collapsed");
    }
  }

  return (
    <Container onClick={toggleDisplay} display={display}>
      <h2>History</h2>
      <div className="list">
        {history.map((item) => (
          <div className="item">
            <h3>{item.when}</h3>
            <h5>{item.amount} {item.unit.short}</h5>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default History;