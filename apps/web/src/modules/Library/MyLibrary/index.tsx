import React from 'react';
import FoodListing from '../FoodListing';

import { Container, List } from './styles';

const MyLibrary: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <h2>My Library</h2>
      </div>
      <List>
        <FoodListing name='Maçã' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} />
        <FoodListing name='Banana' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} />
        <FoodListing name='Abacaxi' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} />
        <FoodListing name='Maçã' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} />
      </List>
    </Container>
  )
}

export default MyLibrary;