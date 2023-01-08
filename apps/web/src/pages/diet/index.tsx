import { MacroHeader } from '@/components/MacroHeader';
import LogList from '@/modules/Dashboard/LogList';
import React from 'react';

// import { Container } from './styles';

const Diet: React.FC = () => {
  return (
    <>
      <MacroHeader carb={55} fat={20} prot={10} calorie={100} />
      <LogList />
    </>
  )
}

export default Diet;