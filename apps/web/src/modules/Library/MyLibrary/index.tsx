import React from 'react';
import Result from '../Result';

import { Container, List } from './styles';

const MyLibrary: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <h2>My Library</h2>
      </div>
      <List>
        <Result name='Maçã' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} />
        <Result name='Banana' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} />
        <Result name='Abacaxi' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} />
        <Result name='Maçã' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} />
      </List>
    </Container>
  )
}

export default MyLibrary;