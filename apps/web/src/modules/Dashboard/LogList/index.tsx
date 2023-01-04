import React, { useState } from 'react';
import ListLog from './ListLog';
import MinifiedLog from './MinifiedLog';

import { Container } from './styles';

const LogList: React.FC = () => {
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">("vertical");

  const handleOrientation = () => {
    if (orientation === "vertical") {
      setOrientation("horizontal");
    } else {
      setOrientation("vertical");
    }
  }

  return (
    <Container orientation={orientation}>
      <div className="header">
        <h3>Logs</h3>

        <button onClick={handleOrientation}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#8B8C8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="logs">
        {orientation === "horizontal" && (
          <>
            <MinifiedLog name='Fritas com Bacon' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <MinifiedLog name='Chá HND Frutas Vermelhas' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <MinifiedLog name='Ovo de galinha' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <MinifiedLog name='Queijo Azul (Gorgonzola)' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
          </>
        )}
        {orientation === "vertical" && (
          <>
            <ListLog name='Fritas com Bacon' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <ListLog name='Chá HND Frutas Vermelhas' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <ListLog name='Ovo de galinha' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <ListLog name='Queijo Azul (Gorgonzola)' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
          </>
        )}
      </div>
      <div className="add-log">
        <span>ADD LOG</span>
      </div>
    </Container>
  )
}

export default LogList;