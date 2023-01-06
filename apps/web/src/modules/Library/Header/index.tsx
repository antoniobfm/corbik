import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Search</h1>
      <a href="/diet/create">CREATE FOOD</a>
    </Container>
  )
}

export default Header;