import React from 'react';

import { FoodListing } from '@/components/FoodListing';

import { Container, List } from './styles';

const PublicLibrary: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <h2>Public Library</h2>
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

export default PublicLibrary;