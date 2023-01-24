import MyLibrary from '@/modules/Library/MyLibrary';
import React from 'react';
import { FoodListing } from '../FoodListing';


import { Container, Library } from './styles';

export const AddIngredient: React.FC = () => {

  return (
    <Container>
      <Library>
        <FoodListing brand='Italiano' name='Parmegiano' macros={{ carbs: 5, prots: 2, fats: 3 }} calories={100} key='0' />
        <FoodListing brand='Mother Nature' name='Apple' macros={{ carbs: 5, prots: 2, fats: 3 }} calories={400} key='1' />
        <FoodListing brand='Mother Nature' name='Banana' macros={{ carbs: 5, prots: 2, fats: 3 }} calories={850} key='2' />
        <FoodListing brand='Mother Nature' name='Alecrim' macros={{ carbs: 5, prots: 2, fats: 3 }} calories={50} key='2' />
        <FoodListing brand='Mother Nature' name='Tomato' macros={{ carbs: 5, prots: 2, fats: 3 }} calories={440} key='2' />
      </Library>
    </Container>
  )
}