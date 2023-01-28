import React from 'react';
import { useRouter } from 'next/router';

import { FoodListing } from '@/components/FoodListing';

import { Container, List } from './styles';

const MyLibrary: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="header">
        <h2>My Library</h2>
      </div>
      <List>
        <FoodListing name='Maçã' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} onClick={() => router.push('/food/test')} />
        <FoodListing name='Banana' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} onClick={() => router.push('/food/test')} />
        <FoodListing name='Abacaxi' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} onClick={() => router.push('/food/test')} />
        <FoodListing name='Maçã' brand='Nature' macros={{carbs: 50, prots: 20, fats: 10}} calories={200} onClick={() => router.push('/food/test')} />
      </List>
    </Container>
  )
}

export default MyLibrary;