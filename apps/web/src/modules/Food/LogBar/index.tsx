import React from 'react';

import { Container, Menu, CreateButton } from './styles';

const LogBar: React.FC = () => {

  return (
    <Container>
      <div>
        <Menu>
          <div className="amount">
            <input
              type="number"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <div className="unit">
            <select name="select" id="select_amount">
              
            </select>
          </div>
          <CreateButton>LOG IT</CreateButton>
        </Menu>
      </div>
    </Container>
  )
}

export default LogBar;