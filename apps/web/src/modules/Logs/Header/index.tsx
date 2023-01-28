import React from 'react';

import { Container } from './styles';

export interface IProps {
  name: string;
  brand: string;
}

const Header: React.FC<IProps> = (food: IProps) => {
  return (
    <Container>
      <h2>{food.brand}</h2>
      <h1>{food.name}</h1>
    </Container>
  )
}

export default Header;