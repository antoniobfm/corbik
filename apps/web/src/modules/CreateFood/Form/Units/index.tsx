import Modal from '@/components/Modal';
import React from 'react';

import { Container } from './styles';
import { UnitListing } from './UnitListing';
import UnitToAdd from './UnitToAdd';

const Units: React.FC = () => {
  return (
    <>
      <Modal>
        <UnitToAdd />
      </Modal>
      <Container>
        <h3>Units</h3>
        <div className="list">
          <UnitListing name="Grams" amount={100} />
          <UnitListing name="Grams" amount={100} />
        </div>
        <button type="button">ADD UNIT</button>
      </Container>
    </>
  )
}

export default Units;