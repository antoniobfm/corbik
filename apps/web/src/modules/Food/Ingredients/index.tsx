import { AddIngredient } from '@/components/AddIngredient';
import { Ingredient } from '@/components/Ingredient';
import Modal from '@/components/Modal';
import React, { useState } from 'react';

import { Container } from './styles';

const Ingredients: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <>
      {isModalActive && (
        <Modal setActive={setIsModalActive}>
          <AddIngredient setIsModalActive={setIsModalActive} />
        </Modal>
      )}
      <Container>
        <h2>Ingredients</h2>
        <div className="list">
          <Ingredient name="Banana" brand="Nature" macros={{ calories: 200, carbs: 20, prots: 10, fats: 5 }} unit={{ name: "gram", short: "g" }} amount={100} />
          <Ingredient name="Apple" brand="Nature" macros={{ calories: 24, carbs: 7, prots: 1.5, fats: 0.1 }} unit={{ name: "gram", short: "g" }} amount={100} />
        </div>
        <button type="button" onClick={() => setIsModalActive(true)}>
          ADD INGREDIENT
        </button>
      </Container>
    </>
  )
}

export default Ingredients;