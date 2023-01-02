import styled from 'styled-components';
import { INutrients } from '..';

interface INutrient {
  type: INutrients;
}

export const Container = styled.div<INutrient>`
  flex: 1;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h4 {
    color: ${props => 'rgba(var(--color-' + props.type + '), 1)'};
  }
`;