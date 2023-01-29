import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Search</h1>
      <Link href="/food/create">CREATE FOOD</Link>
    </Container>
  )
}

export default Header;