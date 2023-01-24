import MyLibrary from '@/modules/Library/MyLibrary';
import React from 'react';
import { FoodListing } from '../FoodListing';


import { Close, Container, CurrentIngredient, Library } from './styles';

export const AddIngredient: React.FC = () => {

  return (
    <Container>
      <Close>
        <span>Close</span>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.1135 9.38668L9.88683 5.61334M9.88683 9.38668L6.1135 5.61334M8.00016 14.1667C11.6668 14.1667 14.6668 11.1667 14.6668 7.50001C14.6668 3.83334 11.6668 0.833344 8.00016 0.833344C4.3335 0.833344 1.3335 3.83334 1.3335 7.50001C1.3335 11.1667 4.3335 14.1667 8.00016 14.1667Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </Close>
      <CurrentIngredient>
        <div className="food">
          <h5>Natureza</h5>
          <h4>Banana</h4>
        </div>
        <span>CURRENT</span>
      </CurrentIngredient>
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