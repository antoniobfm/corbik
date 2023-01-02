import styled from 'styled-components';
import { INutrients } from '../..';
import nutrients from '../../../../data/nutrients.json';

interface IProgressBar {
  type: INutrients;
  value: number;
}

export const Container = styled.div<IProgressBar>`
  width: 100%;
  height: 4px;
  background: ${props => nutrients[props.type].is_macro ? 'rgba(var(--color-' + props.type + '), 0.5)' : 'rgba(var(--color-micro), 0.5)'};
  border-radius: 4px;

  .progress-bar {
    width: ${props => props.value}%;
    height: 4px;
    background: ${props => 'rgba(var(--color-' + props.type + '), 1)'};
    border-radius: 4px;
  }
`;
