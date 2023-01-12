import React from 'react';

import { Container } from '@/modules/Food/styles';
import { MacroHeader } from '@/components/MacroHeader';
import Header from '@/modules/Food/Header';
import When from '@/modules/Food/When';
import Ingredients from '@/modules/Food/Ingredients';
import History from '@/modules/Food/History';

const Food: React.FC = () => {
  return (
    <Container>
      <Header name="Banana" brand="Nature" />
      <MacroHeader carb={50} prot={20} fat={10} calorie={100} />
      <When />
      <Ingredients />
      <History history={[{
        when: "2021-01-01",
        amount: 100,
        unit: {
          name: "gram",
          short: "g"
        }
        },
        {
          when: "2021-01-02",
          amount: 200,
          unit: {
            name: "gram",
            short: "g"
          }
        }]} />
    </Container>
  )
}

export default Food;