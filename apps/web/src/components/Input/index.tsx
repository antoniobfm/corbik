import React, { useRef, useState } from 'react';
import { Controller, Control } from 'react-hook-form';

import { Container, InputBox } from './styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  description?: string;
  control: Control<any>;
  icon?: JSX.Element;
}

export const Input: React.FC<InputProps> = ({ control, name, label, description, icon, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Container>
          {label && <label>{label}</label>}
          {description && <span>{description}</span>}
          <InputBox
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
          </InputBox>
        </Container>
      )}
    />
  )
}