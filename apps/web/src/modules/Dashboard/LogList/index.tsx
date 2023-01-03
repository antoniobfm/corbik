import React from 'react';
import MinifiedLog from './MinifiedLog';

import { Container } from './styles';

const LogList: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <h3>Logs</h3>

        <button>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#8B8C8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="logs">
        <MinifiedLog />
        <MinifiedLog />
        <MinifiedLog />
        <MinifiedLog />
      </div>
      <div className="add-log">
        <span>ADD LOG</span>
      </div>
    </Container>
  )
}

export default LogList;