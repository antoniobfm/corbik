import React from 'react';

import { Container } from './styles';
import { Nutrient } from './Nutrient';
import nutrients from '../../data/nutrients.json';

export interface IMacroHeaderProps {
  carb: number;
  prot: number;
  fat: number;
  calorie: number;
}

export type INutrients = keyof typeof nutrients;

export const MacroHeader: React.FC<IMacroHeaderProps> = ({ carb, prot, fat, calorie }: IMacroHeaderProps) => {
  return (
    <Container>
      <div className="macros">
        <Nutrient type="carb" value={carb} />
        <Nutrient type="prot" value={prot} />
        <Nutrient type="fat" value={fat} />
      </div>
      <Nutrient type="calorie" value={calorie} />
      <div className="micros">
        <div className="vitamins">
          <Nutrient type="vit_a" value={0} />
          <Nutrient type="thiamin" value={0} />
          <Nutrient type="riboflavin" value={0} />
          <Nutrient type="niacin" value={0} />
          <Nutrient type="pantothenic_acid" value={0} />
          <Nutrient type="pyridoxine" value={0} />
          <Nutrient type="folate" value={0} />
          <Nutrient type="cobalamin" value={0} />
          <Nutrient type="vit_c" value={0} />
          <Nutrient type="vit_d" value={0} />
          <Nutrient type="vit_e" value={0} />
          <Nutrient type="vit_k" value={0} />
        </div>
        <div className="minerals">
          <Nutrient type="calcium" value={0} />
          <Nutrient type="copper" value={0} />
          <Nutrient type="chrome" value={0} />
          <Nutrient type="iron" value={0} />
          <Nutrient type="phosphorus" value={0} />
          <Nutrient type="iodo" value={0} />
          <Nutrient type="magnesium" value={0} />
          <Nutrient type="manganese" value={0} />
          <Nutrient type="potassium" value={0} />
          <Nutrient type="sodium" value={0} />
          <Nutrient type="zinc" value={0} />
        </div>
      </div>
    </Container>
  )
}