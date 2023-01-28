import React from 'react';

import { Container } from '@/modules/Logs/styles';
import LogBar from '@/components/LogBar';
import { units } from '@/data/units';

const logs: React.FC = () => {
  return (
    <Container>
      <LogBar type="update" units={units} />
    </Container>
  )
}

export default logs;