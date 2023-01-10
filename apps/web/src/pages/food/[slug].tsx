import React from 'react';

import { Container } from '@/modules/Food/styles';
import { MacroHeader } from '@/components/MacroHeader';
import Header from '@/modules/Food/Header';

const Food: React.FC = () => {
  return (
    <Container>
      <Header name="Banana" brand="Nature" />
      <MacroHeader carb={50} prot={20} fat={10} calorie={100} />
    </Container>
  )
}

export default Food;