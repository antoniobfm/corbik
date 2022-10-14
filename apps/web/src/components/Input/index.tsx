import React, { useRef, useState } from 'react';
import { Controller, Control } from 'react-hook-form';

import { Container } from './styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  icon?: JSX.Element;
}

export const Input: React.FC<InputProps> = ({ control, name, icon, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Container
          onClick={() => inputRef.current!.focus()}
          isFocused={isFocused}
          isFilled={!!field.value}
          hasIcon={!!icon}
        >
          {icon}
          <input 
            {...rest}
            {...field}
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
           />
        </Container>
      )}
    />
  )
}