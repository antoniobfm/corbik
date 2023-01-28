import React from 'react';

import { Container } from '@/modules/Logs/styles';
import LogBar from '@/components/LogBar';
import { units } from '@/data/units';
import Header from '@/modules/Logs/Header';
import { MacroHeader } from '@/components/MacroHeader';

const logs: React.FC = () => {
  return (
    <Container>
      <Header name='Banana' brand="Nature" />
      <LogBar type="update" units={units} />
      <MacroHeader carb={50} prot={20} fat={10} calorie={100} />
    </Container>
  )
}

export default logs;