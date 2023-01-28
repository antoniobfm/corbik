import React from 'react';

import { MacroHeader } from '@/components/MacroHeader';
import Header from '@/modules/Dashboard/Header';
import LogList from '@/modules/Dashboard/LogList';
import { Container } from '@/modules/Dashboard/styles';

const Diet: React.FC = () => {
  return (
    <Container>
      <Header />
      <MacroHeader carb={55} fat={20} prot={10} calorie={100} />
      <LogList />
    </Container>
  )
}

export default Diet;