import React from 'react';

import { Container } from '@/modules/Logs/styles';
import LogBar from '@/components/LogBar';
import { units } from '@/data/units';
import Header from '@/modules/Logs/Header';

const logs: React.FC = () => {
  return (
    <Container>
      <Header name='Banana' brand="Nature" />
      <LogBar type="update" units={units} />
    </Container>
  )
}

export default logs;