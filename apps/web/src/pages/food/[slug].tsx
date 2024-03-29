import React from 'react';

import { Container } from '@/modules/Food/styles';
import { MacroHeader } from '@/components/MacroHeader';
import Header from '@/modules/Food/Header';
import When from '@/modules/Food/When';
import Ingredients from '@/modules/Food/Ingredients';
import History from '@/modules/Food/History';
import Footer from '@/modules/Food/Footer'
import LogBar from '@/components/LogBar';;

import { units } from '@/data/units';
import { history } from '@/data/history';

const Food: React.FC = () => {
  return (
    <Container>
      <LogBar type="create" units={units}/>
      <Header name="Banana" brand="Nature" />
      <MacroHeader carb={50} prot={20} fat={10} calorie={100} />
      <When />
      <Ingredients />
      <History history={history} />
      <Footer />
    </Container>
  )
}

export default Food;