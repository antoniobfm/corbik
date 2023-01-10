import React from 'react';

import { Container } from '@/modules/Food/styles';
import { MacroHeader } from '@/components/MacroHeader';

const Food: React.FC = () => {
  return (
    <Container>
      <MacroHeader carb={50} prot={20} fat={10} calorie={100} />
    </Container>
  )
}

export default Food;