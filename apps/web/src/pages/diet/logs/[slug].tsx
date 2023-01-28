import React from 'react';

import { Container } from '@/modules/Logs/styles';
import LogBar from '@/components/LogBar';
import { units } from '@/data/units';
import Header from '@/modules/Logs/Header';
import { MacroHeader } from '@/components/MacroHeader';
import When from '@/modules/Logs/When';
import History from '@/modules/Logs/History';
import { history } from '@/data/history';
import Footer from '@/modules/Logs/Footer';

const logs: React.FC = () => {
  return (
    <Container>
      <Header name='Banana' brand="Nature" />
      <LogBar type="update" units={units} />
      <MacroHeader carb={50} prot={20} fat={10} calorie={100} />
      <When />
      <History history={history} />
      <Footer />
    </Container>
  )
}

export default logs;