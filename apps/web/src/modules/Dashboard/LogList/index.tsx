import React, { useState } from 'react';
import VerticalLog from './VerticalLog';
import HorizontalLog from './HorizontalLog';

import { Container } from './styles';
import Link from 'next/link';

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
            <HorizontalLog name='Fritas com Bacon' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <HorizontalLog name='Chá Frutas Vermelhas' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <HorizontalLog name='Ovo de galinha' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <HorizontalLog name='Queijo Azul (Gorgonzola)' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
          </>
        )}
        {orientation === "vertical" && (
          <>
            <VerticalLog name='Fritas com Bacon' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <VerticalLog name='Chá Frutas Vermelhas' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <VerticalLog name='Ovo de galinha' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
            <VerticalLog name='Queijo Azul (Gorgonzola)' amount={15} unit={{ short_name: "g" }} calories={200} macros={{ carbs: 15, proteins: 20, fats: 15 }} when={""} />
          </>
        )}
      </div>
      <div className="add-log">
        <Link href="/library">
          <span>ADD LOG</span>
        </Link>
      </div>
    </Container>
  )
}

export default LogList;